// // src/services/api.js
// import axios from "axios";
// import { auth } from "./firebase";
// import toast from "react-hot-toast";

// const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: { "Content-Type": "application/json" },
// });

// api.interceptors.request.use(async (config) => {
//   const user = auth.currentUser;
//   const token = user ? await user.getIdToken() : null;
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     const msg = err?.response?.data?.error || err.message || "Network error";
//     // show non-intrusive toast for failed requests (optional)
//     toast.error(msg);
//     return Promise.reject(err);
//   }
// );

// export default api;


// src/services/api.js
import axios from "axios";
import { auth } from "./firebase";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // <<< YOUR BACKEND URL
});

// Automatically attach Firebase token
api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
