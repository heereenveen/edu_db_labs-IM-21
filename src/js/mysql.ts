import mysql, { ResultSetHeader } from 'mysql2/promise';
import { IMysqlReturn, IPostParams, IUpdateParamrs } from './types';

const pool = mysql.createPool({
    user:       "root",
    password:   "password1234566qew",
    database:   "mydb",
    host:       "localhost"
});

const executeQuery = async (querStr: string) => {
    try {
        const [response] = await pool.query(querStr);
        return {
            res: response
        };
    } catch(error: any) {
        return {
            message: error.sqlMessage
        };
    };
};

export const getMySQLAllOrganizations = async (): Promise<IMysqlReturn> => {
    const queryString = `
        SELECT * FROM organizations
    `;
    return executeQuery(queryString);
};

export const getMySQLAllOrganizationsList = async (): Promise<IMysqlReturn> => {
    const queryString = `
        SELECT * FROM organization_list
    `;
    return executeQuery(queryString);
};

export const getMySQLOrganizationsList = async (id: number): Promise<IMysqlReturn> => {
    const queryString = `
        SELECT * FROM organization_list_has_organizations
        WHERE Organization_list_id = ${id}
    `;
    return executeQuery(queryString);
};

export const getMySQLOrganization = async (id: number): Promise<IMysqlReturn> => {
    const queryString = `
        SELECT * FROM organizations WHERE id = ${id}
    `;
    return executeQuery(queryString);
};

export const insertMySQLOrganization = async ({ name, description }: IPostParams) => {
    const queryString = `
        INSERT INTO organizations (name, description)
        VALUES ('${name}', ${description ? `'${description}'` : null})
    `;
    return executeQuery(queryString);
};

export const updateMySQLOrganization = async ({ id, name, description }: IUpdateParamrs) => {
    const queryString = `
        UPDATE organizations
        SET name = '${name}'${description ? `, description = '${description}'` : ''}
        WHERE id = ${parseInt(id)}
    `;
    return executeQuery(queryString);
};

export const deleteMySQLOrganization = async (id: number) => {
    const queryString = `
        DELETE FROM organizations
        WHERE id = ${id}
    `;
    return executeQuery(queryString);
};

export const deleteMySQLOrganizationFromLists = async (id: number) => {
    const queryString = `
        DELETE FROM organization_list_has_organizations
        WHERE Organizations_id = ${id}
    `;
    return executeQuery(queryString);
};