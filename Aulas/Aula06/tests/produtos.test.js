const supertest = require('supertest');
const Test = require('supertest/lib/test');

const app = require('../app');

const request = supertest(app);

describe('Teste da API /proodutos', function () {

    test('POST / deve retornar um 201 com objeto JSON', async function(){
        const novo = {nome: "uva", preco: 15.0}
        const response = await request.post("/produtos").send(novo);
        expect(response.status).toBe(201);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('nome', novo.nome);
        expect(response.body).toHaveProperty('preco', novo.preco);
    })

    test('POST / deve retornar 422 com Objeto JSON', async function(){
        const response = await  request.post('/produtos');
        expect(response.status).toBe(422);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('msg', 'Nome e preco são obrigatorios');
    })

    test('GET / deve retornar 200 um JSON com array', async function () {
        const response = await request.get("/produtos");
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(Array.isArray(response.body)).toBe(true);
    })

    test('GET /1 deve retornar 200 um JSON com array', async function () {
        const response = await request.get("/produtos/1");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('nome', novo.nome);
        expect(response.body).toHaveProperty('preco', novo.preco);
    })

    test('GET /100 deve retornar 200 um JSON com array', async function () {
        const response = await request.get("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
    })

    test("PUT /1 deve retornar 200 com objeto json", async function () {
        const atual = {nome: "uva globo", preco: 18.0}
        const response = await request.put("/produtos/1").send(atual);
        expect(response.status).toBe(201);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('nome', atual.nome);
        expect(response.body).toHaveProperty('preco', atual.preco);
    });
    test("PUT  /1 deve retornar 422 com objeto json", async function () {
        const response = await  request.put('/produtos/1');
        expect(response.status).toBe(422);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('msg', 'Nome e preco são obrigatorios');
    });
    test("PUT /100 deve retornar 404 com objeto json", async function () {
        const response = await request.put("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
    });
    test("DELETE /1 deve retornar 204 sem corpo", async function () {
        const response = await request.delete("/produtos/1");
        expect(response.status).toBe(204);
        expect(response.type).toBe("application/json");
        expect(response.body).toEqual({});
    });
    test("DELETE /100 deve retornar 404 sem corpo", async function () {
        const response = await request.delete("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
    });


})