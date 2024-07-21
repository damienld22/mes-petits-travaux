import { Module } from '@nestjs/common';
import { ChantiersModule } from './chantiers/chantiers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterielsModule } from './materiels/materiels.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mes-petits-chantiers';

@Module({
  imports: [
    ChantiersModule,
    MongooseModule.forRoot(MONGODB_URI),
    MaterielsModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
