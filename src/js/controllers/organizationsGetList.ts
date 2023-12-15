import { FastifyReply, FastifyRequest } from "fastify";
import { getMySQLAllOrganizationsList } from "../mysql";

const organizationsGetListHandle = async (req: FastifyRequest, reply: FastifyReply) => {
    const data = await getMySQLAllOrganizationsList();
    if(data.message)
        return reply.code(550).send(data);
    return reply.code(200).send(data.res);
};

export default organizationsGetListHandle;