import { IsDateString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateQrCodeDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastName: string;
    
    @IsEmail()
    email: string;

    @IsNotEmpty()
    phone: string;

    @IsDateString()
    birthdate: string;
}