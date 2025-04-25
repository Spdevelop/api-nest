import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { Parcel } from './parcel.schema';
import { ResponseDto } from '../../core/dto';

@Controller('parcel')
export class ParcelController {
  constructor(private readonly ParcelService: ParcelService) {}

  @Get()
  async findAll() {
    const parcels = await this.ParcelService.findAll();

    return ResponseDto.ok({ data: parcels });
  }

  @Post()
  async create(@Body() data: Partial<Parcel>): Promise<Parcel> {
    return this.ParcelService.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Parcel> {
    return this.ParcelService.delete(id);
  }
}
