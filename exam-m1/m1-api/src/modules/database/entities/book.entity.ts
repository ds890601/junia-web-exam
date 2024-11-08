import { Injectable } from "@nestjs/common";
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuthorEntity } from "./author.entity";

export type BookId = string & { __brand: 'Book' };

@Injectable()
export class BookEntity{
    @PrimaryGeneratedColumn('uuid')
    id: BookId;

    @Column( {name: 'title', type: 'varchar'} )
    title: string;

    @Column( {name: 'price', type: 'float'} )
    price: number;

    @Column( {name: 'published_year', type: 'int'} )
    published_year: number

    @ManyToOne(() => AuthorEntity, {nullable: true})
    @JoinColumn( {name: 'author_id'} )
    author_id: AuthorEntity; 

    @Column( {name: 'rating', type: 'float', nullable: true})
    rating: any;

}