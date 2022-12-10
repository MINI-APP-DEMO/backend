import {BaseDataAccess} from "../core/BaseDataAccess";
import {Usuario} from "../entities/usuario.entity";
import {Persona} from "../entities/persona.entity";

export class PersonaDataAccess extends BaseDataAccess {
    constructor() {
        super();
    }

    async Add(add: any[]) {
        try {
         			await this.execProcedure('post_registrar_persona',add)
            return {status: 200}
        } catch (e) {
            throw e
        }
    }

    async listar() {
        try {
            const conexion = await this.pg
            await conexion.query('select *from personas')
            return {status: 200}
        } catch (e) {
            throw e
        }

    }


}