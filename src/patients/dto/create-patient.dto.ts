import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePatientDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  middleInitial: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  lastName: string;

  @IsString()
  @MinLength(10)
  @MaxLength(15)
  @ApiProperty()
  phone: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  sex: string;

  @IsString()
  @MinLength(9)
  @MaxLength(11)
  @ApiProperty()
  ssn: string;

  @IsDate()
  @ApiProperty()
  dateOfBirth: Date;

  @IsString()
  @ApiProperty()
  street: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  state: string;

  @IsString()
  @ApiProperty()
  zip: string;

  @IsString()
  @ApiProperty()
  insuranceCompany: string;

  @IsString()
  @ApiProperty()
  plan: string;

  @IsString()
  @ApiProperty()
  groupNumber: string;

  @IsString()
  @ApiProperty()
  cardHolder: string;

  @IsString()
  @ApiProperty()
  @IsJSON()
  medications: JSON;

  @IsString()
  @ApiProperty()
  allergies: JSON;

  @IsString()
  @ApiProperty()
  @IsJSON()
  medicalHistory: JSON;

  @IsString()
  @ApiProperty()
  @IsJSON()
  familyHistory: JSON;

  @IsString()
  @ApiProperty()
  @IsJSON()
  addictions: JSON;

  @IsString()
  @ApiProperty()
  @IsJSON()
  questionnaire: JSON;

  @IsString()
  @ApiProperty()
  @IsJSON()
  symptoms: JSON;

  @IsString()
  @ApiProperty()
  @IsString()
  signature: string;

}