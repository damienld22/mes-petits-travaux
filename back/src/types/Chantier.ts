import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChantierDocument = HydratedDocument<Chantier>;

@Schema()
export class Chantier {
  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  estimatedDate: string;
}

export const ChantierSchema = SchemaFactory.createForClass(Chantier);
