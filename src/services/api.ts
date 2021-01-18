import axios from "axios";

const api = axios.create({
  baseURL: "https://api.docfacil.me/v1",
});

export default api;
