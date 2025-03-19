import request from 'supertest';
import { app, pool } from "../app.js";  

describe("POST /login", () => {
  it("Paso de prueba, todo correcto", async () => {
    const loginData = { email: "cami@gmail.com", password: "1234" };
    
    console.log('Datos enviados al login:', loginData); 

    
    const res = await request(app)
      .post("/login")
      .send(loginData);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
   
  });

  it("Mostrar error si hay algun inconvente", async () => {
    const loginData = { email: "testuser@example.com", password: "wrongpassword" };
    
    const res = await request(app)
      .post("/login")
      .send(loginData);

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("error");
  });

  afterAll(async () => {
    await pool.end(); 
  });
});
