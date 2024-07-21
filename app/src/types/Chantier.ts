export type ChantierState = "todo" | "done" | "inProgress";

export type Chantier = {
  _id: string;
  name: string;
  description?: string;
  estimatedDate: string;
  parProfessionnel: boolean;
  listMateriels: string[];
  state: ChantierState;
};

export type ChantierForm = Omit<Chantier, "_id">;
