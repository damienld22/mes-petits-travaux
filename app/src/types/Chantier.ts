export type Chantier = {
  id: string;
  name: string;
  description?: string;
  estimatedDate?: string;
};

export type ChantierForm = Omit<Chantier, "id">;
