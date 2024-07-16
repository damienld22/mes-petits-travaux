import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TravailDocument = HydratedDocument<Travail>;

@Schema()
export class Travail {
  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  chantierId: string;

  @Prop()
  parProfessionnel: boolean;
}

export const TravailSchema = SchemaFactory.createForClass(Travail);
