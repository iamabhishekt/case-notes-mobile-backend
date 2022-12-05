import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { 
  IsNotEmpty, 
  IsString,
  IsDate,
  IsNumber,
} from "class-validator";


export class CreateAppointmentDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  readonly appointmentScheduleFrom: Date;

  @IsNotEmpty()
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  readonly appointmentScheduleTo: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly appointmentType: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly appointmentStatus: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly appointmentPatientName: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly appointmentPatientSession: string;

  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  readonly patientId: number;

  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  readonly doctorId: number;

  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  readonly scheduleId: number;
}
