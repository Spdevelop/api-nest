import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parcel, ParcelDocument } from './parcel.schema';
import { NotFoundException } from '@nestjs/common';
import { ErrorException } from 'core/exceptions';
import { isValidObjectId } from 'mongoose';
import { validateMongoId } from 'utils/mongo';
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
  async findById(id: string) {
    validateMongoId(id);
    const parcel = await this.parcelModel.findById(id);
    if (!parcel) throw ErrorException.NOT_FOUND();

    return parcel;
  }

  async create(data: Partial<Parcel>) {
    try {
      const newParcel = new this.parcelModel(data);
      const savedParcel = await newParcel.save();

      if (!savedParcel) {
        throw ErrorException.BAD_REQUEST_WITH({
          message: 'Failed to create parcel',
        });
      }

      return savedParcel;
    } catch (error) {
      throw ErrorException.BAD_REQUEST_WITH({
        message: error.message || 'Failed to create parcel',
      });
    }
  }

  async delete(id: string): Promise<Parcel> {
    const deleted = await this.parcelModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Parcel with id ${id} not found`);
    }
    return deleted;
  }
}
