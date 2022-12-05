import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from 'src/doctors/dto/create-doctor.dto';
import { CreatePatientDto } from 'src/patients/dto/create-patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateScheduleDto } from 'src/schedules/dto/create-schedule.dto';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.prisma.appointment.create({data: createAppointmentDto});
  }

  async findAll(params: { skip?: number; take?: number }) {
    const { skip, take } = params;

    if(isNaN(skip)) return this.prisma.appointment.findMany({ take });

    return this.prisma.appointment.findMany({ 
      skip, 
      take });
  }

  async findOne(id: number) {
    return await this.prisma.appointment.findUnique({
    where: {id},
    });
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.prisma.appointment.update({
      where: { id },
      data: updateAppointmentDto,
    });
  }

  remove(id: number) {
    return this.prisma.appointment.delete({
      where: { id },
    });
  }
}
