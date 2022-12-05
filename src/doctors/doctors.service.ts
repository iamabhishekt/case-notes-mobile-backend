import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(private prisma: PrismaService) {}

  create(createDoctorDto: CreateDoctorDto) {
    return this.prisma.doctor.create({ data: createDoctorDto });
  }

  async findAll(params: { skip?: number; take?: number }) {
    const { skip, take } = params;

    if (isNaN(skip)) return this.prisma.doctor.findMany({ take });

    return this.prisma.doctor.findMany({
      skip,
      take,
    });
  }

  async findOne(id: number) {
    return await this.prisma.doctor.findUnique({ where: { id } });
  }

  async findOneByEmail(email) {
    return await this.prisma.doctor.findUnique({ where: { email } });
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return this.prisma.doctor.update({
      where: { id },
      data: updateDoctorDto,
    });
  }

  remove(id: number) {
    return this.prisma.doctor.delete({
      where: { id },
    });
  }
}
