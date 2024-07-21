import { Module } from '@nestjs/common';
import { MaterielsService } from './materiels.service';
import { MaterielsController } from './materiels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Materiel, MaterielSchema } from 'src/types/Materiel';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Materiel.name,
        schema: MaterielSchema,
      },
    ]),
  ],
  controllers: [MaterielsController],
  providers: [MaterielsService],
})
export class MaterielsModule {}
