import { ApiProperty } from '@nestjs/swagger';
import { Schedule } from '@prisma/client';

export class ScheduleEntity implements Schedule {
  @ApiProperty()
  id: number;

  @ApiProperty()
  scheduleActivity: string;

  @ApiProperty()
  roomNumber: number;

  @ApiProperty()
  providerGroup: string;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  patientId: number;

  @ApiProperty()
  scheduleDate: Date;

  @ApiProperty()
  scheduleFrom: Date;

  @ApiProperty()
  scheduleTo: Date;

  @ApiProperty() 
  scheduleStatus: string;
}