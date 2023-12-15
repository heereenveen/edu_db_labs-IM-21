import mysql, { ResultSetHeader } from 'mysql2/promise';
import { IMysqlReturn, IPostParams, IUpdateParamrs } from './types';

const pool = mysql.createPool({
    user:       "root",
    password:   "password1234566qew",
    port:       3306,
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
        SELECT * FROM Organizations
    `;
    return executeQuery(queryString);
};

export const getMySQLAllOrganizationsList = async (): Promise<IMysqlReturn> => {
    const queryString = `
        SELECT * FROM Organization_list
    `;
    return executeQuery(queryString);
};

export const getMySQLOrganizationsList = async (id: number): Promise<IMysqlReturn> => {
    const queryString = `
        SELECT * FROM Organization_list_has_Organizations
        WHERE Organization_list_id = ${id}
    `;
    return executeQuery(queryString);
};

export const getMySQLOrganization = async (id: number): Promise<IMysqlReturn> => {
    const queryString = `
        SELECT * FROM Organizations WHERE id = ${id}
    `;
    return executeQuery(queryString);
};

export const insertMySQLOrganization = async ({ name, description }: IPostParams) => {
    const queryString = `
        INSERT INTO Organizations (name, description)
        VALUES ('${name}', ${description ? `'${description}'` : null})
    `;
    return executeQuery(queryString);
};

export const updateMySQLOrganization = async ({ id, name, description }: IUpdateParamrs) => {
    const queryString = `
        UPDATE Organizations
        SET name = '${name}'${description ? `, description = '${description}'` : ''}
        WHERE id = ${parseInt(id)}
    `;
    return executeQuery(queryString);
};

export const deleteMySQLOrganization = async (id: number) => {
    const queryString = `
        DELETE FROM Organizations
        WHERE id = ${id}
    `;
    return executeQuery(queryString);
};

export const deleteMySQLOrganizationFromLists = async (id: number) => {
    const queryString = `
        DELETE FROM Organization_list_has_Organizations
        WHERE Organizations_id = ${id}
    `;
    return executeQuery(queryString);
};