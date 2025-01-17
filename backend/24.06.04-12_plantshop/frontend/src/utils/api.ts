import ky from "ky";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:9000";


const api = ky.extend({ prefixUrl: backendUrl });

// export const postlogin = (email: string, password: string) =>
//     api.post("users/login", { json: { email, password: password }, credentials: "include" });

type LoginParams = {
  email: string;
  password: string;
};

export const postlogin = ({ email, password }: LoginParams) =>
  api.post("users/login", {
    json: { email, password: password },
    credentials: "include",
  });

export const postRegistration = (formData) =>
  api.post("users/register", {
    body: formData,
    credentials: "include",
  });
  
export const postlogout = () =>
  api.post("users/logout", {
    credentials: "include",
  });

export const postOrder = ({ products }) =>
  api.post("orders", {
    json: { products },
    credentials: "include",
  });

// fetch("http://localhost:9000/users/login", {
//   body: JSON.stringify({ email, password }),
//   method: "POST",
//   credentials: "include",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
