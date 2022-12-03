import {NextFunction, Request, Response, Router} from 'express'
import {AppController} from "../controllers/app.controller";


export class AppHandler {
    private static instance: AppHandler;
    private readonly _router: Router
    private readonly base = '/'
    private _controller: AppController=new AppController()

    private constructor() {
        this._router = Router()
    }

    public static get getInstance(): AppHandler {
        if (!AppHandler.instance) {
            AppHandler.instance = new AppHandler();
        }
        return AppHandler.instance;
    }

    get router() {
        this._router.get(this.base, this.listarTodo)
        this._router.get(this.base+'listar', this.listarTodo2)
        return this._router
    }

    private async listarTodo(req: Request, res: Response, next?: NextFunction) {
        try {
            const list = await AppHandler.instance._controller.getAll()
            return res.send(list)
        }catch (e) {
            throw e
        }
    }

    private async listarTodo2(req: Request, res: Response, next?: NextFunction) {
        try {
            const list = await AppHandler.instance._controller.getAll2()
            return res.send(list)
        }catch (e) {
            throw e
        }
    }

}