import { api } from "../Api";

export async function checkApiKey(apiKey: string): Promise<boolean> {
  const { data } = await api.get("/", {
    headers: {
      "x-api-key": apiKey,
    },
  });
  return data.isOk;
}
