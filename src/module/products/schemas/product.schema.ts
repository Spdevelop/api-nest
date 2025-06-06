// products/schemas/product.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  station_name: string;

  @Prop({ required: true })
  station_id: string;

  @Prop()
  date_time: string;

  @Prop()
  status: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
