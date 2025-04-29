import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { Parcel } from './parcel.schema';
import { ResponseDto, IdParam } from '../../core/dto';
import { ErrorException } from '../../core/exceptions';
import { UpdateParcelSignatureDto } from './dto/update-parcel-signature.dto';

@Controller('parcel')
export class ParcelController {
  constructor(private readonly ParcelService: ParcelService) {}

  @Get()
  async findAll() {
    const parcels = await this.ParcelService.findAll();

    return ResponseDto.ok({
      data: parcels,
      meta: {
        total: parcels.length,
        limit: 0,
        offset: 0,
      },
    });
  }

  @Get('/list-group')
  async findAllByGroup() {
    const parcels = await this.ParcelService.findAllByGroup();

    return ResponseDto.ok({
      data: parcels,
      meta: {
        total: parcels.length,
        limit: 0,
        offset: 0,
      },
    });
  }

  @Get(':id')
  async findById(@Param() { id }: IdParam) {
    const parcel = await this.ParcelService.findById(id);

    return ResponseDto.ok({
      data: parcel,
    });
  }

  @Post('/detail')
  async fetchByAddress(@Body() data: Partial<Parcel>) {
    if (!data.addressFullParcel) {
      throw ErrorException.BAD_REQUEST_WITH({
        message: 'addressFullParcel is required',
      });
    }
    const parcel = await this.ParcelService.fetchByAddress(
      data.addressFullParcel,
    );

    return ResponseDto.ok({
      data: parcel,
    });
  }
  @Post('/signature')
  async updateParcelSignature(@Body() data: UpdateParcelSignatureDto) {
    const parcel = await this.ParcelService.updateParcelSignature(
      data.idParcels,
      data.signatureBase64,
    );

    return ResponseDto.ok({
      data: parcel,
    });
  }

  @Post()
  async create(@Body() data: Partial<Parcel>) {
    const parcel = await this.ParcelService.create(data);

    return ResponseDto.ok({ data: parcel });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.ParcelService.delete(id);
    return ResponseDto.ok({
      message: 'delete success',
    });
  }
}
