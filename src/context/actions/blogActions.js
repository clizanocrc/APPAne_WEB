import { types } from "../../types/types";

export const registraBlogs = (resp, dispatch) => {
  const { total, blogs, comentarios, likes, categorias } = resp;
  dispatch({
    type: types.blogCargados,
    payload: {
      total: total,
      blogs: blogs,
      comentarios: comentarios,
      likes: likes,
      categorias: categorias,
    },
  });
};

export const seleccionaBlog = (payload, dispatch) => {
  dispatch({
    type: types.blogSeleccionado,
    payload,
  });
};

export const limpiaBlogs = (dispatch) => {
  dispatch({
    type: types.blogPurga,
  });
};

export const addBlog = (payload, dispatch) => {
  dispatch({
    type: types.blogAdd,
    payload,
  });
};
export const updateBlog = (payload, dispatch) => {
  dispatch({
    type: types.blogUpdate,
    payload,
  });
};
export const deleteBlog = (payload, dispatch) => {
  dispatch({
    type: types.blogDelete,
    payload,
  });
};

// Likes
export const cargaLikes = (payload, dispatch) => {
  dispatch({
    type: types.blogCargaLikes,
    payload: {
      likes: payload,
    },
  });
};

// Comentarios
export const addComentarios = (payload, dispatch) => {
  dispatch({
    type: types.blogRegistraComentarios,
    payload,
  });
};

export const addComentario = (payload, dispatch) => {
  dispatch({
    type: types.blogAddComentario,
    payload,
  });
};

export const updateComentario = (payload, dispatch) => {
  dispatch({
    type: types.blogEditComentario,
    payload,
  });
};

export const deleteComentario = (payload, dispatch) => {
  dispatch({
    type: types.blogDeleteComentario,
    payload,
  });
};
