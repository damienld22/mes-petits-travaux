import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MaterielDocument = HydratedDocument<Materiel>;

@Schema()
export class Materiel {
  @Prop()
  name: string;

  @Prop()
  isPossessed: boolean;

  @Prop()
  whereCollect?: string;

  @Prop()
  price?: number;
}

export const MaterielSchema = SchemaFactory.createForClass(Materiel);
