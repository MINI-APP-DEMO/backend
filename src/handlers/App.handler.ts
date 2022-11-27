import {Request, Response, NextFunction, Router} from 'express'


export class AppHandler{
    private static instance: AppHandler;
    private readonly _router:Router
    private readonly base='/'
    private constructor() {this._router=Router() }
    public static get getInstance(): AppHandler {
        if (!AppHandler.instance) {
            AppHandler.instance = new AppHandler();
        }
        return AppHandler.instance;
    }
   get router(){
        this._router.get(this.base,this.listarTodo)
        return this._router
    }

   private  listarTodo(req:Request,res:Response,next?:NextFunction){
        return res.send('INICIANDO APP')

    }

}