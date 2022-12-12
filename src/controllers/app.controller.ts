import {TypeORMSource} from "../database/typeorm/typeORM.source";
import {Usuario} from "../entities/usuario.entity";
import {PgSource} from "../database/pg/pg.source";
import { Table } from "typeorm";

export class AppController{
    constructor() {
    }
    async getAll() {
        try {
            const conexion= await TypeORMSource.getInstance.dbConnection
            return conexion.manager.find(Usuario)
        }catch (e) {
            throw e;
        }

    }
    async getAll2() {
        try {
            const conexion= new PgSource().dbConexion
         const {rows}=await(await conexion).query('select *from usuarios')
            return rows
        }catch (e) {
            throw e;
        }

    }
}