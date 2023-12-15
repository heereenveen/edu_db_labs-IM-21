import { RouteShorthandOptionsWithHandler } from "fastify";
import organizationsGetAllHandle from "./controllers/organizationsGetAll";
import organizationsGetByIdHandle from "./controllers/organizationsGetById";
import organizationsPostHandle from "./controllers/organizationsPost";
import organizationsPutHandle from "./controllers/organizationsPutById";
import organizationsDeleteHandle from "./controllers/organizationsDeleteById";
import organizationsGetListHandle from "./controllers/organizationsGetList";
import organizationsGetListByIdHandle from "./controllers/organizationsGetListById";
import organizationsDeleteFromListHandle from "./controllers/organizationsDeleteFromList";

const idSearchObject = {
    type: 'object',
    properties: {
        id: { type: 'number' }
    }
};
const organizationPostObject = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        description: { type: 'string' }
    }
};
const organizationObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        ...organizationPostObject.properties
    }
};
const organizationListObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        list_of_organizations: { type: 'string' }
    }
};
const organizationListComponentObject = {
    type: 'object',
    properties: {
        Organization_list_id: { type: 'number' },
        Organizations_id: { type: 'number' }
    }
};
const errorMessageObject = {
    type: 'object',
    properties: {
        message: { type: 'string' }
    }
};

export const organizationsGetAllOpts: RouteShorthandOptionsWithHandler = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: organizationObject
            },
            500: errorMessageObject
        }
    },
    handler: organizationsGetAllHandle
};
export const organizationsGetByIdOpts: RouteShorthandOptionsWithHandler = {
    schema: {
        params: idSearchObject,
        response: {
            200: organizationObject,
            500: errorMessageObject,
            400: errorMessageObject
        }
    },
    handler: organizationsGetByIdHandle
};
export const organizationsCreateOpts: RouteShorthandOptionsWithHandler = {
    schema: {
        body: organizationPostObject,
        response: {
            200: organizationObject,
            500: errorMessageObject,
            400: errorMessageObject
        }
    },
    handler: organizationsPostHandle
};
export const organizationsUpdateOpts: RouteShorthandOptionsWithHandler = {
    schema: {
        body: organizationPostObject,
        params: idSearchObject,
        response: {
            200: organizationObject,
            500: errorMessageObject,
            400: errorMessageObject
        }
    },
    handler: organizationsPutHandle
};
export const organizationsDeleteOpts: RouteShorthandOptionsWithHandler = {
    schema: {
        params: idSearchObject,
        response: {
            500: errorMessageObject,
            400: errorMessageObject
        }
    },
    handler: organizationsDeleteHandle
};

export const organizationsListGetAllOpts: RouteShorthandOptionsWithHandler = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: organizationListObject
            },
            500: errorMessageObject
        }
    },
    handler: organizationsGetListHandle
};
export const organizationsListGetByIdOpts: RouteShorthandOptionsWithHandler = {
    schema: {
        params: idSearchObject,
        response: {
            200: {
                type: 'array',
                items: organizationListComponentObject
            },
            500: errorMessageObject,
            400: errorMessageObject
        }
    },
    handler: organizationsGetListByIdHandle
};

export const organizationsDeleteFromListOpts: RouteShorthandOptionsWithHandler = {
    schema: {
        params: idSearchObject,
        response: {
            500: errorMessageObject,
            400: errorMessageObject
        }
    },
    handler: organizationsDeleteFromListHandle
};