import { Module } from '@nestjs/common';
import { ChantiersModule } from './chantiers/chantiers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TravauxModule } from './travaux/travaux.module';

@Module({
  imports: [
    ChantiersModule,
    TravauxModule,
    MongooseModule.forRoot('mongodb://localhost/mes-petits-chantiers'),
    TravauxModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
