import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Appointment } from '@prisma/client';


@Entity('Appointments') // sql table === 'Appointments'
export class AppointmentEntity implements Appointment {
  @ApiProperty()
  id: number;

  @ApiProperty()
  appointmentScheduleFrom: Date;

  @ApiProperty()
  appointmentScheduleTo: Date;

  @ApiProperty()
  appointmentType: string;

  @ApiProperty()
  appointmentStatus: string;

  @ApiProperty()
  appointmentPatientName: string;

  @ApiProperty()
  appointmentPatientSession: string;

  @ApiProperty()
  patientId: number;

  @ApiProperty()
  doctorId: number;

  @ApiProperty()
  scheduleId: number;
}
