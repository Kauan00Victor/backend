const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Deve retornar 200 e um JSON no GET /produtos", 
async function() {
  const response = await request.get("/produtos");
  console.log(response.headers);
  expect(response.status).toBe(200);  
  expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 200 e um JSON no GET /produtos/1", 
async function() {
  const response = await request.get("/produtos/1");
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 404 e um JSON no GET /produtos/100", 
async function() {
  const response = await request.get("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 201 e um JSON no POST /produtos", 
async function() {
  const response = await request.post("/produtos")
    .body({nome: "Banana", preco: 15.00});
  expect(response.status).toBe(201);
  expect(response.headers['content-type']).toMatch(/json/);      
})

test("Deve retornar 422 e um JSON no POST /produtos", 
async function() {
  const response = await request.post("/produtos").body({});
  expect(response.status).toBe(422);
  expect(response.headers['content-type']).toMatch(/json/);      
})

test("Deve retornar 200 e um JSON no PUT /produtos/1", 
async function() {
  const response = await request.put("/produtos/1")
    .body({nome: "Banana nanica", preco: 18.00});
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 404 e um JSON no PUT /produtos/100", 
async function() {
  const response = await request.put("/produtos/100").body({});
  expect(response.status).toBe(404);
  expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar 204 e sem conteudo no DELETE /produtos/1", 
async function() {
  const response = await request.delete("/produtos/1");
  expect(response.status).toEqual(204);
  expect(response.body).toBeNull();
})

test("Deve retornar 404 e um JSON no DELETE /produtos/100", 
async function() {
  const response = await request.delete("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.headers['content-type']).toMatch(/json/); 
})