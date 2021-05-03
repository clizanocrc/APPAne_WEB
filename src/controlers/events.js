import { fetchConToken } from "../helpers/fetch";

export const eventoCrea = async (data) => {
  const evento = await fetchConToken("calendario", data, "POST");
  return evento;
};

export const eventoUpdate = async (data) => {
  const { id } = data;
  const evento = await fetchConToken(`calendario/${id}`, data, "PUT");
  return evento;
};

export const eventoDelete = async (data) => {
  const { id } = data;
  const evento = await fetchConToken(`calendario/${id}`, data, "DELETE");
  return evento;
};
