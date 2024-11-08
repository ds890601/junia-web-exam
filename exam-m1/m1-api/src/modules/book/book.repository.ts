import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { BookEntity } from "../database/entities/book.entity";

@Injectable()
export class BookRepository {
    private readonly bookRepository = this.dataSource.getRepository(BookEntity);

    constructor(private readonly dataSource: DataSource) {}
}