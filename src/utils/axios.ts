import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import https from "https";

const api = axios.create({
  baseURL: "http://localhost:5081",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  config.headers!.Authorization = `Bearer ${session?.accessToken}`;

  return config;
});

export default api;
