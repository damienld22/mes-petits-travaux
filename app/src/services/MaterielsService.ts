import axios from "axios";
import { Materiel, MaterielForm } from "../types/Materiel";

const ROOT_URL = "/api";

export async function getAllMateriels(): Promise<Materiel[]> {
  const url = `${ROOT_URL}/materiels`;
  const { data } = await axios.get(url);
  return data;
}

export async function createMateriel(body: MaterielForm): Promise<Materiel> {
  const url = `${ROOT_URL}/materiels`;
  const { data } = await axios.post(url, body);
  return data;
}

export async function getMateriel(id: string): Promise<Materiel> {
  const url = `${ROOT_URL}/materiels/${id}`;
  const { data } = await axios.get(url);
  return data;
}

export async function editMateriel(
  id: string,
  body: Partial<MaterielForm>
): Promise<Materiel> {
  const url = `${ROOT_URL}/materiels/${id}`;
  const { data } = await axios.patch(url, body);
  return data;
}

export async function deleteMateriel(id: string) {
  const url = `${ROOT_URL}/materiels/${id}`;
  const { data } = await axios.delete(url);
  return data;
}
