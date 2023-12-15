import fastify, { FastifyInstance } from 'fastify';
import * as dotenv from 'dotenv';

import organizationsRoutes from './routes/organizations';

dotenv.config();
const app: FastifyInstance = fastify();


app.register(organizationsRoutes);

app.listen({
    port: parseInt(process.env.PORT!)
}, (err: Error | null, address: string) => {
    if(err)
        return console.error(err);
    console.log(`Server is running on ${address}`);
});