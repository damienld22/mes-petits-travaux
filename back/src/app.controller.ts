import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  check(@Headers() headers) {
    const isOk = this.appService.check(headers['x-api-key']);
    return { isOk };
  }
}
