import { Injectable } from '@nestjs/common';
import { Chantier } from 'src/types/Chantier';

@Injectable()
export class ChantiersService {
  getAll(): Chantier[] {
    return [];
  }
}
