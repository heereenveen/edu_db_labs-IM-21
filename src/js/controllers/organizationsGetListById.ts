import { FastifyReply, FastifyRequest } from "fastify";
import { getMySQLOrganizationsList } from "../mysql";
import { IIdParams } from "../types";

const organizationsGetListByIdHandle = async (req: FastifyRequest, reply: FastifyReply) => {
    const { id } = req.params as IIdParams;
    if(!id || typeof id !== 'number')
        return reply.code(400).send({ message: 'params.id is not valid' });
    const data = await getMySQLOrganizationsList(parseInt(id));
    if(data.message)
        return reply.code(500).send(data);
    if(!data.res[0])
        return reply.code(400).send({ message: 'no list found' });
    return reply.code(200).send(data.res);
};

export default organizationsGetListByIdHandle;