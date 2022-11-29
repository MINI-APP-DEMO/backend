import {TypeORMSource} from "../database/typeorm/typeORM.source";
import {UsuarioEntity} from "../entities/usuario.entity";
import {PgSource} from "../database/pg/pg.source";

export class AppController{
    constructor() {
    }
    async getAll() {
        try {
            const conexion= await new TypeORMSource().dbConnection
            return conexion.manager.find(UsuarioEntity)
        }catch (e) {
            throw e;
        }

    }

    async getAll2() {
        try {
            const conexion= new PgSource().dbConexion
            const {rows}=await conexion.query('select *from usuarios')
            return rows
        }catch (e) {
            throw e;
        }

    }
}