import { Module } from '@nestjs/common';
import { ChantiersModule } from './chantiers/chantiers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ChantiersModule,
    MongooseModule.forRoot('mongodb://localhost/mes-petits-chantiers'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
