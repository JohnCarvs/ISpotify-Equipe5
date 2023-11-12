import api from "../api";

export default async function createArtist(body) {
  const res = await api.post(`/artists`, {
    name: body.name,
    nationality: body.nationality,
    image: body.image,
  });
  return res.data;
}
