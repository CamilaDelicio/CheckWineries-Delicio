import {pool} from "../app.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [existingUsers] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);
        if (existingUsers.length > 0) return res.status(400).json({ error: "El correo ya está registrado" });

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, hashedPassword]);

        res.json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);
        if (users.length === 0) return res.status(401).json({ error: "Correo no registrado" });

        const user = users[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

        const token = jwt.sign({ id: user.id, email: user.email }, "secreto_super_seguro", { expiresIn: "1h" });
        console.log("Token generado:", token);
        res.json({ token, email: user.email });
        console.log("Inicio de sesión")
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const crearConsulta = async (req, res) => {
    const { name, email, message } = req.body;
    const authHeader = req.headers['authorization'];

    console.log("Encabezado Authorization recibido:", authHeader);

    if (!authHeader) {
        return res.status(401).json({ error: 'No se proporcionó un token' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Formato de token incorrecto' });
    }

    try {
        const decoded = jwt.verify(token, "secreto_super_seguro");

        const user_id = decoded.id;

        const [result] = await pool.query(
            'INSERT INTO consultas (name, email, message, user_id) VALUES (?, ?, ?, ?)',
            [name, email, message, user_id]
        );

        return res.status(201).json({
            message: 'Consulta recibida exitosamente',
            resultId: result.insertId,
        });

    } catch (error) {
        console.error("Error en la verificación del token o inserción:", error);

        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ error: 'Token no válido' });
        }
        return res.status(500).json({ error: 'Error al guardar la consulta' });
    }
};
