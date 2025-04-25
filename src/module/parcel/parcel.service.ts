import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parcel, ParcelDocument } from './parcel.schema';
import { NotFoundException } from '@nestjs/common';
import { ErrorException } from 'core/exceptions';

@Injectable()
export class ParcelService {
  constructor(
    @InjectModel(Parcel.name) private parcelModel: Model<ParcelDocument>,
  ) {}

  async findAll() {
    const listParcel = await this.parcelModel.find();

    if (!listParcel) {
      throw ErrorException.BAD_REQUEST_WITH({ message: 'Parcel not found' });
    }
    return listParcel;
  }

  async create(data: Partial<Parcel>): Promise<Parcel> {
    const newParcel = new this.parcelModel(data);
    return newParcel.save();
  }

  async delete(id: string): Promise<Parcel> {
    const deleted = await this.parcelModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Parcel with id ${id} not found`);
    }
    return deleted;
  }
}
