import { FastifyInstance } from "fastify";
import {
    organizationsGetAllOpts,
    organizationsGetByIdOpts,
    organizationsCreateOpts,
    organizationsUpdateOpts,
    organizationsDeleteOpts,
    organizationsListGetAllOpts,
    organizationsListGetByIdOpts,
    organizationsDeleteFromListOpts
} from "../schemas";


const organizationsRoutes = (instance: FastifyInstance, options: any, done: any) => {
    instance.get('/organizations', organizationsGetAllOpts);
    instance.get('/organizations/:id', organizationsGetByIdOpts);

    instance.post('/organizations', organizationsCreateOpts);

    instance.put('/organizations/:id', organizationsUpdateOpts);

    instance.delete('/organizations/:id', organizationsDeleteOpts);

    instance.get('/organizationslist', organizationsListGetAllOpts);
    instance.get('/organizationslist/:id', organizationsListGetByIdOpts);

    instance.delete('/organizations/lists/:id', organizationsDeleteFromListOpts);
    done();
};

export default organizationsRoutes;