import { FastifyReply, FastifyRequest } from "fastify";
import { IIdParams } from "../types";
import { deleteMySQLOrganizationFromLists } from "../mysql";

const organizationsDeleteFromListHandle = async (req: FastifyRequest, reply: FastifyReply) => {
    const { id } = req.params as IIdParams;
    if(!id)
        return reply.code(400).send({ message: 'Id is not found' });
    const data = await deleteMySQLOrganizationFromLists(parseInt(id));
    if(data.message)
        return reply.code(500).send(data);
    return reply.code(200).send(data);
};

export default organizationsDeleteFromListHandle;