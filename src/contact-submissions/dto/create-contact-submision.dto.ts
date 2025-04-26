import { IsEmail, isNotEmpty, IsNotEmpty, IsOptional,IsString } from "class-validator";


export class CreateContactSubmissionDto {
    
    @IsNotEmpty({message: "El campo fullName no debe estar vacio"})
    @IsString({message: "El campo fullName debe ser una cadena de texto "})
    fullName: string;

    @IsNotEmpty({message: "El campo email no debe estar vacio"})
    @IsEmail({}, {message: "El campo Email no es valido"})
    email: string;
    
    @IsOptional()
    @IsString({message: "El campo country debe ser una cadena de texto "})
    country: string;

    @IsOptional()
    @IsString({message: "El campo phone debe ser una cadena de texto "})
    phone: string;

    @IsNotEmpty({message: "El campo message no debe estar vacio"})
    @IsString({message: "El campo message debe ser una cadena de texto "})
    message: string;
}