import { Module } from '@nestjs/common';
import { ChantiersModule } from './chantiers/chantiers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TravauxModule } from './travaux/travaux.module';

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mes-petits-chantiers';

@Module({
  imports: [
    ChantiersModule,
    TravauxModule,
    MongooseModule.forRoot(MONGODB_URI),
    TravauxModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
