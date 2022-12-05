import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
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
  userName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  patientId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  scheduleDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  scheduleFrom: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  scheduleTo: Date;

  @ApiProperty() 
  @IsNotEmpty()
  @IsString()
  scheduleStatus: string;
}