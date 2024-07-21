export type Materiel = {
  _id: string;
  name: string;
  isPossessed?: boolean;
  whereCollect?: string;
  price?: number;
};

export type MaterielForm = Omit<Materiel, "_id">;
