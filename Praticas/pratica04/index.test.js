const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);


test ('Deve retornar 200', async function(){
    const response = await request.get("/")
    expect(response.status).toBe(200);
})

test ('Deve retornar 201', async function(){
    const response = await request.post("/")
    expect(response.status).toBe(201);
})

test ('Deve retornar 200', async function(){
    const response = await request.put("/")
    expect(response.status).toBe(200);
})

test ('Deve retornar 204', async function(){
    const response = await request.delete("/")
    expect(response.status).toBe(204);
})