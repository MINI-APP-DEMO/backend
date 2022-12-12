import {DataSource} from "typeorm";
import {configuracionDBTypeORM} from "./configuracionDB-typeorm";

export class TypeORMSource {
  private readonly dataSource: DataSource;
  private static instance: TypeORMSource;

  private constructor() {
    // console.log('configuracion typeorm', configuracionDBTypeORM)
    this.dataSource = new DataSource(configuracionDBTypeORM);
  }

  inicializarConexion() {
    console.log("inicianando conexion por TYPEORM ::");
    return new Promise((resolve, reject) => {
      this.dataSource.initialize()
        .then((con) => {
          console.log("base de datos conectada ::", con.isInitialized);
          resolve(this.dataSource);
        })
        .catch((error) => {
           console.log("error al conectar base de datos::", error);
          reject(error)
        });
    })
    
   
  }
  public static get getInstance(): TypeORMSource {
    if (!TypeORMSource.instance) {
      TypeORMSource.instance = new TypeORMSource();
    }
    return TypeORMSource.instance;
  }

  get dbConnection(): Promise<DataSource> {
    try {
      console.log('llamando a la conexion')
      if (this.dataSource.isInitialized) {
        console.log('ya existe una conexion DB::')
         return Promise.resolve(this.dataSource);
      }
      else {
        this.inicializarConexion();
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (this.dataSource.isInitialized) resolve(this.dataSource);
            else reject("Error al crear la conexion a la base de datos ::");
          }, 3000);
        });
      }
    } catch (e) {
      throw e;
    }
  }

  // public static get instance():TypeORMSource{
  //    if(TypeORMSource._instance){
  //        TypeORMSource._instance=new TypeORMSource()
  //    }
  //    return TypeORMSource._instance
  // }
}