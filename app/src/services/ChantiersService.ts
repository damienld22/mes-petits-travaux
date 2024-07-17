import axios from "axios";
import { Chantier, ChantierForm } from "../types/Chantier";
import { Travail } from "../types/Travail";

const ROOT_URL = "/api";

export async function getAllChantiers(): Promise<Chantier[]> {
  const url = `${ROOT_URL}/chantiers`;
  const { data } = await axios.get(url);
  return data;
}

export async function createChantier(body: ChantierForm): Promise<Chantier> {
  const url = `${ROOT_URL}/chantiers`;
  const { data } = await axios.post(url, body);
  return data;
}

export async function getChantier(id: string): Promise<Chantier> {
  const url = `${ROOT_URL}/chantiers/${id}`;
  const { data } = await axios.get(url);
  return data;
}

export async function getTravauxChantier(id: string): Promise<Travail[]> {
  const url = `${ROOT_URL}/chantiers/${id}/travaux`;
  const { data } = await axios.get(url);
  return data;
}

export async function editChantier(
  id: string,
  body: Partial<ChantierForm>
): Promise<Chantier> {
  const url = `${ROOT_URL}/chantiers/${id}`;
  const { data } = await axios.patch(url, body);
  return data;
}

export async function deleteChantier(id: string) {
  const url = `${ROOT_URL}/chantiers/${id}`;
  const { data } = await axios.delete(url);
  return data;
}
