import cors from "cors";
import express,{Application} from "express";
import bodyParser from 'body-parser'
import morgan from "morgan";
import _routers from './_routers'
import {ENVIRONMENT} from "./constantes";
import { TypeORMSource } from "./database/typeorm/typeORM.source";
import { PgSource } from "./database/pg/pg.source";
import indexControllers from "./controllers-routers/index.controllers";
export class App{
    private _app:Application
    constructor(private port?:number) {
        this._app=express()
        this.middlewares()
        this.configuraciones()
        this.enrutamiento()
        this.initDatabase()
        this.loadControllers()
    }
    private configuraciones(){
        this._app.set('PORT',process.env.port||this.port||5000)
        this._app.use(cors())
        this._app.use(bodyParser.json())
        this._app.use(bodyParser.urlencoded({extended:true}))
    }

    private loadControllers(){
     // const rutas=  indexControllers
      //  console.log(rutas)


    }
    private  initDatabase() {
        setTimeout(async () => {
          await TypeORMSource.getInstance.dbConnection;
        }, 3000);
       
    }

    private middlewares(){
        // console.log('environment',ENVIRONMENT)
        this._app.use(morgan("dev"))
    }
    private enrutamiento(){
        this._app.use(_routers)
    }
    listen(){
        this._app.listen(this._app.get('PORT'),()=>{
            console.log('levantando servidor :: http://localhost:'+this._app.get('PORT'))
        })
    }
}