import {Client, Pool} from 'pg'
import configuracionDBPg from "./configuracionDB-pg";

export class PgSource {
    private readonly datasource: Client
    private static _pgSource: PgSource

    constructor(private client?: boolean) {
        this.datasource = new Client(configuracionDBPg)
    }

    // public static instance(client?: boolean) {
    //     if (PgSource._pgSource) {
    //         PgSource._pgSource = new PgSource(client);
    //     }
    //     return PgSource._pgSource
    // }

    private initConexionClient(): Promise<Client> {
        return new Promise((resolve, reject) => {
            let fulfilled = 0
            const timeout = setTimeout(() => {
                console.log('La BD superó los 10 segundos')
                if (!fulfilled) {
                    const err = 'El espera de conexión a BD superó los 10 segudos.'
                    console.error(err);
                    reject(err)
                }
                return null
            }, 10000)
            this.datasource.connect()
                .then(() => {
                    clearTimeout(timeout);
                    resolve(this.datasource)
                })
                .catch(error => {
                    console.log('Hubo un error en la conexión...')
                    console.error(error)
                    clearTimeout(timeout);
                    reject(error)
                })
        })
    }

    private initConexionPool() {
    }

    get dbConexion(): Promise<Client> {
        return this.initConexionClient()
    }
}