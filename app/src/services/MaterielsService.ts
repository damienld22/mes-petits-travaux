import { api } from "../Api";
import { Materiel, MaterielForm } from "../types/Materiel";

export async function getAllMateriels(): Promise<Materiel[]> {
  const url = `materiels`;
  const { data } = await api.get(url);
  return data;
}

export async function createMateriel(body: MaterielForm): Promise<Materiel> {
  const url = `materiels`;
  const { data } = await api.post(url, body);
  return data;
}

export async function getMateriel(id: string): Promise<Materiel> {
  const url = `materiels/${id}`;
  const { data } = await api.get(url);
  return data;
}

export async function editMateriel(
  id: string,
  body: Partial<MaterielForm>
): Promise<Materiel> {
  const url = `materiels/${id}`;
  const { data } = await api.patch(url, body);
  return data;
}

export async function deleteMateriel(id: string) {
  const url = `materiels/${id}`;
  const { data } = await api.delete(url);
  return data;
}
