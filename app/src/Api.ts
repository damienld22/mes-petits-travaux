import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

// Add a request interceptor
api.interceptors.request.use(function (config) {
  // Do something before the request is sent
  const existingApiKey = localStorage.getItem("apiKey");
  if (existingApiKey) {
    config.headers["x-api-key"] = existingApiKey;
  }
  return config;
});

export { api };
