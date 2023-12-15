export interface IMysqlReturn {
    res?: any[] | any;
    message?: string;
};

export interface IPostParams {
    name: string;
    description?: string;
};

export interface IIdParams {
    id: string;
};

export interface IUpdateParamrs extends IPostParams, IIdParams {};