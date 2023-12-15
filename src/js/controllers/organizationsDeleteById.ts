import { FastifyReply, FastifyRequest } from "fastify";
import { IIdParams } from "../types";
import { deleteMySQLOrganization } from "../mysql";

const organizationsDeleteHandle = async (req: FastifyRequest, reply: FastifyReply) => {
    const { id } = req.params as IIdParams;
    if(!id)
        return reply.code(400).send({ message: 'Id is not found' });
    const data = await deleteMySQLOrganization(parseInt(id));
    if(data.message)
        return reply.code(500).send(data);
    return reply.code(200).send(data);
};

export default organizationsDeleteHandle;