export type Travail = {
  _id: string;
  name: string;
  description?: string;
  chantierId: string;
  parProfessionnel: boolean;
};

export type TravailForm = Omit<Travail, "_id">;
