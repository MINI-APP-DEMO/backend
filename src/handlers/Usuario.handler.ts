import {NextFunction, Request, Response, Router} from 'express'
import {AppController} from "../controllers/app.controller";
import {UsuarioController} from "../controllers-routers/UsuarioController";


export class UsuarioHandler {
    private static instance: UsuarioHandler;
    private readonly _router: Router
    private readonly base = '/usuario'
    private _controller: AppController = new AppController()

    private constructor() {
        this._router = Router()
    }

    public static get getInstance(): UsuarioHandler {
        if (!UsuarioHandler.instance) {
            UsuarioHandler.instance = new UsuarioHandler();
        }
        return UsuarioHandler.instance;
    }

    get router() {
        this._router.post(this.base, this.Add)
        this._router.get(this.base, this.listarTodo)
        return this._router
    }

    private async Add(req: Request, res: Response, next?: NextFunction) {
        try {
            const list = await UsuarioHandler.instance._controller.getAll()
            return res.send(list)
        } catch (e) {
            throw e
        }
    }

    private async listarTodo(req: Request, res: Response, next?: NextFunction) {
        try {
            const list = await UsuarioHandler.instance._controller.getAll2()
            return res.send(list)
        } catch (e) {
            throw e
        }
    }

    private async listarUno(req: Request, res: Response, next?: NextFunction) {
        try {
            const list = await UsuarioHandler.instance._controller.getAll2()
            return res.send(list)
        } catch (e) {
            throw e
        }
    }

}