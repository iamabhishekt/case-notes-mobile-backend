import { ApiProperty } from '@nestjs/swagger';
import { Patient } from '@prisma/client';

export class PatientEntity implements Patient {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty()
  title: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  middleInitial: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  ssn: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  zip: string;

  @ApiProperty()
  insuranceCompany: string;

  @ApiProperty()
  plan: string;

  @ApiProperty()
  groupNumber: string;

  @ApiProperty()
  cardHolder: string;

  @ApiProperty()
  medications: string;

  @ApiProperty()
  allergies: string;

  @ApiProperty()
  surgeries: string;

  @ApiProperty()
  familyHistory: string;

  @ApiProperty()
  addictions: string; 

  @ApiProperty()
  questionnaire: string;

  @ApiProperty()
  symptoms: string;

  @ApiProperty()
  signature: string;
}