import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChantierState = 'todo' | 'done' | 'inProgress';

export type ChantierDocument = HydratedDocument<Chantier>;

@Schema()
export class Chantier {
  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  estimatedDate: string;

  @Prop()
  parProfessionnel: boolean;

  @Prop()
  listMateriels: string[];

  @Prop()
  state: ChantierState;
}

export const ChantierSchema = SchemaFactory.createForClass(Chantier);
