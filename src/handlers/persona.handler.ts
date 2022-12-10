import {NextFunction, Request, Response, Router} from 'express'
import {PersonaController} from "../controllers/persona.controller";


export class PersonaHandler {
    private static instance: PersonaHandler;
    private readonly _router: Router
    private readonly base = '/persona'
    private _controller = new PersonaController()

    private constructor() {
        this._router = Router()
    }

    public static get getInstance(): PersonaHandler {
        if (!PersonaHandler.instance) {
            PersonaHandler.instance = new PersonaHandler();
        }
        return PersonaHandler.instance;
    }

    get router() {
        this._router.post(this.base, this.Add)
        this._router.get(this.base, this.listarTodo)
        return this._router
    }

    private async Add(req: Request, res: Response, next?: NextFunction) {
        try {
            const list = await PersonaHandler.instance._controller.registrar(req)
            return res.send(list)
        } catch (e) {
									return res.status(500).send(e)
        }
    }

    private async listarTodo(req: Request, res: Response, next?: NextFunction) {
        try {
            const list = await PersonaHandler.instance._controller.listar()
            return res.send(list)
        } catch (e) {
            throw e
        }
    }

    private async listarUno(req: Request, res: Response, next?: NextFunction) {
        try {
            const list = await PersonaHandler.instance._controller.listar()
            return res.send(list)
        } catch (e) {
            throw e
        }
    }

}