export interface CRUD {
    index: ( limit: number, page: number ) => Promise<any>;
    getById: ( id: string | number ) => Promise<any>;
    create: ( resource: any ) => Promise<any>;
    putById: ( id: string | number, resource: any ) => Promise<string>;
    deleteById: ( id: string | number ) => Promise<string>;
    patchById: ( id: string | number, resource: any ) => Promise<string>;
}