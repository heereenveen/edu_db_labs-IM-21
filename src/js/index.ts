import fastify, { FastifyInstance } from 'fastify';
import * as dotenv from 'dotenv';

import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import cors from '@fastify/cors';

import organizationsRoutes from './routes/organizations';

dotenv.config();
const app: FastifyInstance = fastify();

const swaggerOptions = {
    swagger: {
        info: {
            title: "Organizations",
            description: "Part of API for organization`s endpoints",
            version: "1.0"
        },
        host:       "localhost:8080",
        schemes:    ["http"],
        consumes:   ["application/json"],
        produces:   ["application/json"]
    }
};
const swaggerUiOptions = {
    routePrefix: '/info',
    exposeRoute: true
};

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);

app.register(cors, {
    origin: ['*'],
    methods: [
        'GET',
        'PUT',
        'POST',
        'DELETE'
    ]
});


app.register(organizationsRoutes);

app.listen({
    port: parseInt(process.env.PORT!)
}, (err: Error | null, address: string) => {
    if(err)
        return console.error(err);
    console.log(`Server is running on ${address}`);
});