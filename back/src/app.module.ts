import { Module } from '@nestjs/common';
import { ChantiersModule } from './chantiers/chantiers.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mes-petits-chantiers';

@Module({
  imports: [ChantiersModule, MongooseModule.forRoot(MONGODB_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
