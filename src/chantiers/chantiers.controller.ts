import { Controller, Get } from '@nestjs/common';
import { ChantiersService } from './chantiers.service';

@Controller('chantiers')
export class ChantiersController {
  constructor(private readonly service: ChantiersService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
