import { ChantierState } from 'src/types/Chantier';

export type CreateChantierDto = {
  name: string;
  description?: string;
  estimatedDate: string;
  parProfessionnel: boolean;
  listMateriels: string[];
  state: ChantierState;
};
