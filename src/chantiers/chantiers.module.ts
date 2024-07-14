import { Module } from '@nestjs/common';
import { ChantiersController } from './chantiers.controller';
import { ChantiersService } from './chantiers.service';

@Module({
  controllers: [ChantiersController],
  providers: [ChantiersService],
})
export class ChantiersModule {}
