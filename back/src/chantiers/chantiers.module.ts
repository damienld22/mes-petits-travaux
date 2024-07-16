import { Module } from '@nestjs/common';
import { ChantiersService } from './chantiers.service';
import { ChantiersController } from './chantiers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chantier, ChantierSchema } from 'src/types/Chantier';
import { Travail, TravailSchema } from 'src/types/Travail';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Chantier.name,
        schema: ChantierSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Travail.name,
        schema: TravailSchema,
      },
    ]),
  ],
  controllers: [ChantiersController],
  providers: [ChantiersService],
})
export class ChantiersModule {}
