import { Module } from '@nestjs/common';
import { ChantiersService } from './chantiers.service';
import { ChantiersController } from './chantiers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chantier, ChantierSchema } from 'src/types/Chantier';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Chantier.name,
        schema: ChantierSchema,
      },
    ]),
  ],
  controllers: [ChantiersController],
  providers: [ChantiersService],
})
export class ChantiersModule {}
