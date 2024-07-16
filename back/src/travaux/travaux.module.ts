import { Module } from '@nestjs/common';
import { TravauxService } from './travaux.service';
import { TravauxController } from './travaux.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Travail, TravailSchema } from 'src/types/Travail';
import { Chantier, ChantierSchema } from 'src/types/Chantier';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Travail.name,
        schema: TravailSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Chantier.name,
        schema: ChantierSchema,
      },
    ]),
  ],
  controllers: [TravauxController],
  providers: [TravauxService],
})
export class TravauxModule {}
