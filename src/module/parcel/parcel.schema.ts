import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParcelDocument = Parcel & Document;

@Schema()
export class Parcel {
  @Prop({ required: true })
  nameParcel: string;

  @Prop()
  trackingId: string;

  @Prop()
  imgParcel: string;

  @Prop()
  addressFullParcel: string;

  @Prop()
  typeParcel: string;

  @Prop()
  companyParcel: string;

  @Prop()
  status: string;
}

export const ParcelSchema = SchemaFactory.createForClass(Parcel);
