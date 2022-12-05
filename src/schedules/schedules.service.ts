// "@nestjs/cli": "^9.1.5",
// "@nestjs/schematics": "^9.0.3",

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  create(createPatientDto: CreateScheduleDto) {
    return this.prisma.schedule.create({ data: createPatientDto });
  }

  async findAll(params: { skip?: number; take?: number }) {
    const { skip, take } = params;

    if (isNaN(skip)) return this.prisma.schedule.findMany({ take });

    return this.prisma.schedule.findMany({
      skip,
      take,
    });
  }

  async findOne(id: number) {
    return await this.prisma.schedule.findUnique({ where: { id } });
  }

  update(id: number, updatePatientDto: UpdateScheduleDto) {
    return this.prisma.schedule.update({
      where: { id },
      data: updatePatientDto,
    });
  }

  remove(id: number) {
    return this.prisma.schedule.delete({
      where: { id },
    });
  }
}