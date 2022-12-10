import {PersonaDataAccess} from "../dataAccess/persona.dataAccess";
import {makeErr, makePgIntArr} from "../helpers/log.helpers";

export class PersonaController {
    private dataAccess = new PersonaDataAccess()

    async registrar(req: any) {
        try {
//            const user = verifyUser(req);
            //        if (user.err) return user.err
									console.log('datos',req.body)
            const reg = req.body
            console.log('request::', req)
            if (!reg.nombres ) {
                return await makeErr(400, "Faltan los parámetros [nombre] y [nivelCatastro]")
            }
            if (!reg.paterno ) {
                return await makeErr(400, "Faltan los parámetros [temporalidad] y [particionTipo]")
            }
            console.log('registro a enviar::', {registros: reg})
            return await this.dataAccess.Add([{registros: reg}])
        } catch (e) {
            throw  e
        }
//
    }

    async listar() {
        return await this.dataAccess.listar()
    }
}