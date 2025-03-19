import express from "express"; 
import {createPool} from "mysql2/promise";
import cors from "cors"; 
import authRouter from "./routes/authRouter.js"


const app = express()
app.use(express.json());

const pool = createPool ({
    host: "localhost",
    user: "root",
    password: "marizza5895",
    port: 3306,
    database: "checkwineries"
});


app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));




app.use("/", authRouter);


export {app, pool};