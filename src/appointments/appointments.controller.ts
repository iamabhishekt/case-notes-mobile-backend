import
{
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    NotFoundException,
    Query,
    ParseIntPipe,
    UseFilters,
    DefaultValuePipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentEntity } from './entities/appointment.entity';


@Controller('appointments')
@ApiTags('appointments')
export class AppointmentsController {
  constructor(
    private readonly appointmentsService: AppointmentsService) {}

  @Post()
  @ApiCreatedResponse({ type: AppointmentEntity })
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    // console.log(createAppointmentDto instanceof CreateAppointmentDto);
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  @ApiCreatedResponse({ type: AppointmentEntity, isArray: true })
  async findAll(
    @Query('skip', new DefaultValuePipe(0)) skip: string,
    @Query('take', new DefaultValuePipe(10)) take: string,
  ) {
    return this.appointmentsService.findAll({
      skip: Number(skip),
      take: Number(take),
    });
  }

  @Get(':id')
  @ApiCreatedResponse({ type: AppointmentEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    // console.log(typeof id);
    const appointment = await this.appointmentsService.findOne(id);

    if (!appointment) {
      throw new NotFoundException(`Appointment #${id} not found`);
    }

    return appointment;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: AppointmentEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: AppointmentEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.remove( id );
  }
}
