import { Injectable } from "@nestjs/common";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export type AuthorId = String & { __brand: 'Author' };

@Injectable()
export class AuthorEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: AuthorId;

    @Column( {name: 'name', type: 'varchar'} )
    name: String;

    @Column( {name: 'photo', type: 'blob'} )
    photo: any;

}