import { Optional } from "@nestjs/common";
import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsString()
    FullName: string;
}