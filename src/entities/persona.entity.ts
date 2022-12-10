import { Usuario } from './usuario.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('personas')
export class Persona extends BaseEntity{
 @PrimaryGeneratedColumn() id?: number
 @Column({name:'nombres'}) nombres?:string
 @Column({name:'paterno'}) apellidoPaterno?:string
 @Column({name:'materno'}) apellidoMaterno?:string
 @Column({name:'dni'}) dni?:string
 @Column({name:'sexo'}) sexo?:string
 @Column({name:'fecha_nacimiento',type:'int'}) fechaNacimiento?:number
 @OneToMany(()=>Usuario,usuario=>usuario.persona)
 usuario?: Usuario

 }