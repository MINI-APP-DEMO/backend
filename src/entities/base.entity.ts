import {Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

export class BaseEntity{
    @Column({default:true})
    status?:boolean
    @CreateDateColumn({nullable:false})
    created?:number

    @UpdateDateColumn({nullable:false})
    updated?:number

}