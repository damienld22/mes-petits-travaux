import { Chantier, ChantierForm } from "../types/Chantier";
import { api } from "../Api";

export async function getAllChantiers(): Promise<Chantier[]> {
  const url = `chantiers`;
  const { data } = await api.get(url);
  return data;
}

export async function createChantier(body: ChantierForm): Promise<Chantier> {
  const url = `chantiers`;
  const { data } = await api.post(url, body);
  return data;
}

export async function getChantier(id: string): Promise<Chantier> {
  const url = `chantiers/${id}`;
  const { data } = await api.get(url);
  return data;
}

export async function editChantier(
  id: string,
  body: Partial<ChantierForm>
): Promise<Chantier> {
  const url = `chantiers/${id}`;
  const { data } = await api.patch(url, body);
  return data;
}

export async function deleteChantier(id: string) {
  const url = `chantiers/${id}`;
  const { data } = await api.delete(url);
  return data;
}
