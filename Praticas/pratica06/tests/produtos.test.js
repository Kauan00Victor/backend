const supertest = require("supertest");

const app = require('../app');

const  request = supertest(app);

const novo =  { 'nome': 'uva', 'preco': 20.00 }

test('POST /produtos deve retornar 201 e um JSON', async function(){
    const response = await request.post('/produtos').send(novo);
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty('id', 1);
});

test('GET /produtos deve retornar 200 e um JSON', async function(){
    const response = await request.get('/produtos');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(Array.isArray(response.body)).toBe(true);
})

test('GET /produtos/1 deve retornar 200 e um JSON contendo id nome e preco',  async function(){
    const response = await request.get('/produtos/1');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nome', novo.nome);
    expect(response.body).toHaveProperty('preco', novo.preco);
})

test('GET /produtos/100 deve retornar 404 e um JSON', async function(){
    const response = await request.get('/produtos/100');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
})

test('POST /produtos deve retornar 422 e um JSON', async function(){
    const response = await request.post('/produtos/100')
    expect(response.status).toBe(422);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty("msg", "Nome e preço do produtos são obrigatórios");
})

test('PUT /produtos/1 deve retornar 200 e um JSON', async function(){
    const atualizado = {'nome': 'uva verde', 'preco': 18.00}
    const response = await request.put('/produtos/1').send(atualizado);
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nome', atualizado.nome)
    expect(response.body).toHaveProperty('preco', atualizado.preco)
})

test('PUT /produtos/100 deve retornar 404 e um conteudo JSON', async function(){
    const response = await request.put('/produtos/100');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
})

test('DELETE /produtos/1 deve retornar 204 sem JSON', async function(){
    const response = await request.delete('/produtos/1')
    expect(response.body).toBe(204);
    expect(response.body).toHaveProperty({});
})

test('DELETE /produtos/100 deve retornar 404 e um JSON', async function(){
    const response = await request.delete('/produtos/100')
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
})

