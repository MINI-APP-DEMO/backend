import { ENVIRONMENT } from "../../constantes";

export default {
    host: ENVIRONMENT.database.typeorm.host||'localhost',
    user:  ENVIRONMENT.database.typeorm.user||'postgres',
    port: 5432,
    password:  ENVIRONMENT.database.typeorm.password||"sa",
    database: ENVIRONMENT.database.typeorm.database|| "tienda-online",
    max:  ENVIRONMENT.database.typeorm.max||20,
    idleTimeoutMillis:  ENVIRONMENT.database.typeorm.idleTimeoutMillis||30000,
    connectionTimeoutMillis:  ENVIRONMENT.database.typeorm.connectionTimeoutMillis||2000,
}