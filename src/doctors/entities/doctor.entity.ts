import { ApiProperty } from '@nestjs/swagger';
import { Doctor } from '@prisma/client';

export class DoctorEntity implements Doctor {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  contactNumber: string;

  @ApiProperty({ required: false, nullable: true })
  profession: string | null;

  @ApiProperty({ required: false, nullable: true })
  qualification: string | null;

  @ApiProperty()
  case: string;

  @ApiProperty()
  profilePicture: string;
}
