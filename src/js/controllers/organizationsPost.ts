import { FastifyReply, FastifyRequest } from "fastify";
import { insertMySQLOrganization } from "../mysql";
import { IPostParams } from "../types";
import { ResultSetHeader } from "mysql2";

const organizationsPostHandle = async (req: FastifyRequest, reply: FastifyReply) => {
    const organizationParams = req.body as IPostParams;
    if(!organizationParams.name)
        return reply.code(400).send({ message: 'You should provide the name for organization' })
    const data = await insertMySQLOrganization(organizationParams);
    if(data.message)
        return reply.code(500).send(data);
    return reply.code(200).send({
        ...organizationParams,
        id: (data.res as ResultSetHeader).insertId
    });
};

export default organizationsPostHandle;