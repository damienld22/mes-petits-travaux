import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  check(apiKey: string) {
    return apiKey === process.env.API_KEY;
  }
}
