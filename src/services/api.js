import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3333", react native não deixa fazer requisição que não é https
  baseURL: "http://192.168.100.28:3333",
});

export default api;
