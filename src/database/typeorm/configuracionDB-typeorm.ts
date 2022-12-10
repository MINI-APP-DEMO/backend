
import {DataSourceOptions} from "typeorm";
import indexEntities from "../../entities/index.entities";
import {ENVIRONMENT} from "../../constantes";

export const configuracionDBTypeORM:DataSourceOptions= {
    type:ENVIRONMENT.database.typeorm.type|| "postgres",
    host: ENVIRONMENT.database.typeorm.host||"localhost",
    port: 5432,
    username: ENVIRONMENT.database.typeorm.username||"postgres",
    password: ENVIRONMENT.database.typeorm.password||"sa",
    database: ENVIRONMENT.database.typeorm.database||"tienda-online",
    logging: ENVIRONMENT.database.typeorm.logging||false,
    synchronize:ENVIRONMENT.database.typeorm.synchronize|| false,
    entities:indexEntities
}