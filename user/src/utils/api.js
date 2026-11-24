// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api/products/",
});

export default api;