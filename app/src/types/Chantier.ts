export type Chantier = {
  _id: string;
  name: string;
  description?: string;
  estimatedDate?: string;
};

export type ChantierForm = Omit<Chantier, "_id">;
