import {DataSource} from "typeorm";
import {configuracionDBTypeORM} from "./configuracionDB-typeorm";

export class TypeORMSource {
    private readonly dataSource: DataSource
    private static _instance: TypeORMSource

    constructor() {
        console.log('configuracion typeorm', configuracionDBTypeORM)
        this.dataSource = new DataSource(configuracionDBTypeORM)

    }

    inicializarConexion() {
        console.log('inicializando app')
        this.dataSource.initialize()
            .then((con) => {
                console.log('base de datos conectada TYPEORM::')
            })
            .catch((error) => {
                console.log('error al conectar base de datos::', error)
            })
    }


    get dbConnection(): Promise<DataSource> {
        try {
            console.log('status conexion ::',this.dataSource.isInitialized)
            if (this.dataSource.isInitialized) return Promise.resolve(this.dataSource);
            else this.inicializarConexion()
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    if (this.dataSource.isInitialized) resolve(this.dataSource);
                    else reject("Error al crear la conexion a la base de datos ::");
                },3000)
            });
        } catch (e) {
            throw e
        }

    }

    // public static get instance():TypeORMSource{
    //    if(TypeORMSource._instance){
    //        TypeORMSource._instance=new TypeORMSource()
    //    }
    //    return TypeORMSource._instance
    // }

}