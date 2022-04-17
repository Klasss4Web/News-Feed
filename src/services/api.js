import axios from "axios";

export * from "./routes.constants";

const baseURL = "https://newsapi.org/v2";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
  },
});

export default axiosInstance;

const baseURL1 = ""

export const axiosInstance1 = axios.create({
  baseURL1,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
  },
});

