
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/Busao', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createBusao(body);
    return reply.status(201).send();
})

// READE
server.get('/Busao', async () => {
    const busao = await databasePostgres.listBusao();
    return busao;
});

// UPDATE
server.put('/Busao/:id', async (request, reply) => {
    const BusaoID = request.params.id;
    const body = request.body;
    await databasePostgres.updateBusao(busaoID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/Busao/:id', async (request, reply) => {
    const userID = request.params.id;
    await databasePostgres.deleteBusao(busaoID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
