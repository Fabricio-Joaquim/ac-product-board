import axios, { AxiosInstance } from "axios";

const apiService: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export { apiService };
