import axios from "axios";
import { Travail, TravailForm } from "../types/Travail";

const ROOT_URL = "/api";

export async function createTravail(body: TravailForm): Promise<Travail> {
  const url = `${ROOT_URL}/travaux`;
  const { data } = await axios.post(url, body);
  return data;
}

export async function getTravail(id: string): Promise<Travail> {
  const url = `${ROOT_URL}/travaux/${id}`;
  const { data } = await axios.get(url);
  return data;
}

export async function editTravail(
  id: string,
  body: Partial<TravailForm>
): Promise<Travail> {
  const url = `${ROOT_URL}/travaux/${id}`;
  const { data } = await axios.patch(url, body);
  return data;
}

export async function deleteTravail(id: string) {
  const url = `${ROOT_URL}/travaux/${id}`;
  const { data } = await axios.delete(url);
  return data;
}
