import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { 
  IsNotEmpty, 
  IsString,
  IsDate,
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

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly patientId: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly doctorId: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly scheduleId: number;
}
