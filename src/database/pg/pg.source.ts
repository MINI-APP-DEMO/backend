import {Client, Pool} from 'pg'
import configuracionDBPg from "./configuracionDB-pg";

export class PgSource {
    private readonly datasource: Pool | Client
    private static _pgSource: PgSource

    constructor(client?: boolean) {
        if (client) this.datasource = new Client(configuracionDBPg)
        else this.datasource = new Pool(configuracionDBPg)
    }

    // public static instance(client?: boolean) {
    //     if (PgSource._pgSource) {
    //         PgSource._pgSource = new PgSource(client);
    //     }
    //     return PgSource._pgSource
    // }

    get dbConexion() {
        return this.datasource
    }
}