import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "./base.entity";
import { Persona } from "./persona.entity";

@Entity('usuarios')
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id?:number

    @Column()
    username?:string

    @Column()
    password?:string

    @ManyToOne(()=>Persona,persona=>persona.usuario)
    @JoinColumn({name:'persona_id'})
    persona?:Persona

}