import { fetchConToken, fetchImgConToken } from "../helpers/fetch";
import { viewErrors } from "../helpers/messagesUI";

export const blogCrea = async (data) => {
  const { titulo, categoria, contenido, contenidocorto, images } = data;
  const blog = await fetchConToken(
    "blogs",
    { titulo, categoria, contenido, contenidocorto },
    "POST"
  );
  if (images) {
    await fetchImgConToken(
      `uploadsimg/blogentrada/${blog.blog.id}`,
      images,
      "PUT"
    );
  }
  return blog;
};

export const blogUpdate = async (data, dataActual) => {
  const { id, images: imagesActual } = dataActual;
  const { images } = data;
  const { titulo, categoria, contenido, contenidocorto } = data;

  const blog = await fetchConToken(
    `blogs/${id}`,
    { titulo, categoria, contenido, contenidocorto },
    "PUT"
  );
  if (!blog.ok) {
    viewErrors(blog);
    return blog;
  }
  if (images) {
    if (images !== imagesActual) {
      await fetchImgConToken(`uploadsimg/blogentrada/${id}`, images, "PUT");
    }
  }
  return blog;
};

export const blogDelete = async (data) => {
  const { id } = data;
  const blog = await fetchConToken(`blogs/${id}`, data, "DELETE");
  return blog;
};

export const blogComentarioAdd = async (data) => {
  const { id, comentario } = data;
  const coment = await fetchConToken(
    `blogs/comment/${id}`,
    { comentario },
    "POST"
  );
  return coment;
};

export const blogComentarioEdit = async (data) => {
  const { id, comentario, blogentrada } = data;
  const coment = await fetchConToken(
    `blogs/comment/${id}`,
    { comentario, blogentrada },
    "PUT"
  );
  return coment;
};

export const blogComentarioDelete = async (data) => {
  const { id } = data;
  const comentario = await fetchConToken(`blogs/comment/${id}`, data, "DELETE");
  return comentario;
};
