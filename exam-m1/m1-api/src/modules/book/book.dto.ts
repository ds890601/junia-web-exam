import { Optional } from "@nestjs/common";
import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    Title: string;

    @IsNumber()
    Price: number;

    @IsInt()
    PublidhedYear: number;

    @IsNumber()
    @Optional()
    Rating: number;
}