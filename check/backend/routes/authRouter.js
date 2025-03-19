import express from "express";
import { register, login, crearConsulta } from "../controllers/authController.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/consulta", crearConsulta)


export default router;