import { CRUD } from "../common/crud.interface";

class UsersService implements CRUD{
    create( resource: any ): Promise<any> {
        return Promise.resolve(undefined);
    }

    deleteById( id: string | number ): Promise<string> {
        return Promise.resolve("");
    }

    getById( id: string | number ): Promise<any> {
        return Promise.resolve(undefined);
    }

    index( limit: number, page: number ): Promise<any> {
        return Promise.resolve(undefined);
    }

    patchById( id: string | number, resource: any ): Promise<string> {
        return Promise.resolve("");
    }

    putById( id: string | number, resource: any ): Promise<string> {
        return Promise.resolve("");
    }

}
export default new UsersService();
