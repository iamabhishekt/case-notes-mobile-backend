import { ApiProperty } from '@nestjs/swagger';
import { 
  IsNotEmpty, 
  IsString,
  IsDate,
} from "class-validator";
import { IsDateString } from "class-validator";


export class CreateAppointmentDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsDate()
  readonly appointmentScheduleFrom: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsDate()
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
}
