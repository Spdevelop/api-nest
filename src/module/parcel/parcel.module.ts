import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParcelController } from './parcel.controller';
import { ParcelService } from './parcel.service';
import { Parcel, ParcelSchema } from './parcel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Parcel.name, schema: ParcelSchema }]),
  ],
  controllers: [ParcelController],
  providers: [ParcelService],
})
export class ParcelModule {}
