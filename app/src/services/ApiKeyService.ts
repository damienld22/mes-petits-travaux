import axios from "axios";

export async function checkApiKey(apiKey: string): Promise<boolean> {
  const ROOT_URL = "/api";

  const url = `${ROOT_URL}`;
  const { data } = await axios.get(url, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  return data.isOk;
}
