import { FastifyReply, FastifyRequest } from "fastify";
import { getMySQLAllOrganizations } from "../mysql";

const organizationsGetAllHandle = async (req: FastifyRequest, reply: FastifyReply) => {
    const data = await getMySQLAllOrganizations();
    if(data.message)
        return reply.code(550).send(data);
    return reply.code(200).send(data.res);
};

export default organizationsGetAllHandle;