import {Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

export class BaseEntity{
    @Column({default:true})
    status?:boolean

    @Column({default:false})
    deleted?:boolean

    @Column({name:'usuario_id'})
    usuarioID?: number
    @Column({name:'temp_id'})
    tempID?: number

    @CreateDateColumn({nullable:false})
    created?:number

    @UpdateDateColumn({nullable:false})
    updated?:number

}