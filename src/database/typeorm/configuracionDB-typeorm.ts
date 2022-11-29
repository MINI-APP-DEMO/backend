
import {DataSourceOptions} from "typeorm";
import indexEntities from "../../entities/index.entities";

export const configuracionDBTypeORM:DataSourceOptions= {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "sa",
    database: "practica-yawi",
    logging: false,
    synchronize: false,
    entities:indexEntities
}