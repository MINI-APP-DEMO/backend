import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "./base.entity";

@Entity('usuarios')
export class UsuarioEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id?:number

    @Column()
    username?:string

    @Column()
    password?:string

}