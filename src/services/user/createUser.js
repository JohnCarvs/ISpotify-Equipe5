import api from "../api";

export default async function createUser(body) {
  const res = await api.post(`/users/login`, {
    name: body.name,
    email: body.email,
    password: body.password,
    role: body.role,
  });
  return res.data;
}
