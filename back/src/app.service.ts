import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  check(apiKey: string) {
    return apiKey && apiKey === process.env.API_KEY;
  }
}
