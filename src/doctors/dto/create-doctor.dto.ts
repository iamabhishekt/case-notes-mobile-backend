import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateDoctorDto {

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  lastName: string;

  @IsString()
  @MinLength(10)
  @MaxLength(15)
  @ApiProperty()
  contactNumber: string;

  @IsOptional()
  @ApiProperty({ required: false })
  profession?: string;

  @IsString()
  @ApiProperty({ required: false })
  qualification?: string;

  @IsString()
  @ApiProperty()
  case: string;

  @IsUrl()
  @ApiProperty()
  profilePicture: string;
}

