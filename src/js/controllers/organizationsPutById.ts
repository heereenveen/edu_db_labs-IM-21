import { FastifyReply, FastifyRequest } from "fastify";
import { updateMySQLOrganization } from "../mysql";
import { IIdParams, IPostParams } from "../types";

const organizationsPutHandle = async (req: FastifyRequest, reply: FastifyReply) => {
    const organizationParams = req.body as IPostParams;
    const { id } = req.params as IIdParams;
    if(!organizationParams.name || !id)
        return reply.code(400).send({ message: 'You should provide the name and id for organization' })
    const data = await updateMySQLOrganization({
        id: id,
        ...organizationParams
    });
    if(data.message)
        return reply.code(500).send(data);
    return reply.code(200).send(data.res);
};

export default organizationsPutHandle;