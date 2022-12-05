import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateScheduleDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  scheduleActivity: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  roomNumber: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  providerGroup: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  patientId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  scheduleDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  scheduleFrom: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  scheduleTo: Date;

  @ApiProperty() 
  @IsNotEmpty()
  @IsString()
  scheduleStatus: string;
}