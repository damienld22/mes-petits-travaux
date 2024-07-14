import { Module } from '@nestjs/common';
import { ChantiersModule } from './chantiers/chantiers.module';

@Module({
  imports: [ChantiersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
