import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
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
  @Type(() => Date)
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
  medications: string;

  @IsString()
  @ApiProperty()
  allergies: string;

  @IsString()
  @ApiProperty()
  surgeries: string;

  @ApiProperty()
  @IsString()
  medicalHistory: string;

  @ApiProperty()
  @IsString()
  familyHistory: string;

  @ApiProperty()
  @IsString()
  addictions: string;

  @ApiProperty()
  @IsString()
  questionnaire: string;

  @ApiProperty()
  @IsString()
  symptoms: string;

  @IsString()
  @ApiProperty()
  signature: string;

}