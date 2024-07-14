import axios from "axios";
import { Chantier } from "../types/Chantier";

const ROOT_URL = "http://localhost:3000";

export async function getAllChantiers(): Promise<Chantier[]> {
  const url = `${ROOT_URL}/chantiers`;
  const { data } = await axios.get(url);
  return data;
}
