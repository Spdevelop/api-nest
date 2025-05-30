import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parcel, ParcelDocument } from './parcel.schema';
import { NotFoundException } from '@nestjs/common';
import { ErrorException } from '../../core/exceptions';
import { validateMongoId } from '../../utils/mongo';
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
  async findAllByGroup() {
    const result = await this.parcelModel.aggregate([
      { $match: { status: 'pending' } },
      {
        $group: {
          _id: { $ifNull: ['$addressFullParcel', 'unknown'] },
          parcels: { $push: '$$ROOT' },
          count: { $sum: 1 },
          lastParcel: { $last: '$$ROOT' },
        },
      },
      {
        $project: {
          addressFullParcel: '$_id',
          parcels: '$count',
          dateParcel: '$lastParcel.dateTime',
          typeParcel: '$lastParcel.typeParcel',
          nameParcel: '$lastParcel.nameParcel',
          companyParcel: '$lastParcel.companyParcel',
          _id: 0,
        },
      },
    ]);

    if (!result || result.length === 0) {
      throw ErrorException.BAD_REQUEST_WITH({ message: 'Parcel not found' });
    }

    return result;
  }
  async findById(id: string) {
    validateMongoId(id);
    const parcel = await this.parcelModel.findById(id);
    if (!parcel) throw ErrorException.NOT_FOUND();

    return parcel;
  }
  async fetchByAddress(address: string) {
    const parcel = await this.parcelModel.find({
      addressFullParcel: {
        $regex: address,
        $options: 'i',
      },
      status: 'pending',
    });
    if (!parcel) throw ErrorException.NOT_FOUND();

    return parcel;
  }

  async create(data: Partial<Parcel>) {
    try {
      const newParcel = new this.parcelModel(data);
      newParcel.dateTime = new Date().toISOString();
      newParcel.status = 'pending';
      newParcel.signatureBase64 = '';
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

  async updateParcelSignature(
    idParcels: string[],
    signatureBase64: string,
  ): Promise<any> {
    const result = await this.parcelModel.updateMany(
      { _id: { $in: idParcels } },
      {
        $set: {
          signatureBase64,
          status: 'success',
        },
      },
    );

    if (result.modifiedCount === 0) {
      throw new NotFoundException(`No parcels found with the provided IDs`);
    }

    return {
      message: `${result.modifiedCount} parcels updated successfully`,
    };
  }
}
