import { initialState } from "../context/initialState/blogInitialState";
import { types } from "../types/types";

export const blogReducer = (blogs, action) => {
  switch (action.type) {
    // Blogs
    case types.blogCargados:
      return {
        ...blogs,
        ...action.payload,
      };
    case types.blogSeleccionado:
      return {
        ...blogs,
        blogSeleccionado: action.payload,
      };
    case types.blogAdd:
      return {
        ...blogs,
        blogs: [...blogs.blogs, action.payload],
      };
    case types.blogUpdate:
      return {
        ...blogs,
        blogs: blogs.blogs.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case types.blogDelete:
      return {
        ...blogs,
        blogs: blogs.blogs.filter((e) => e.id !== blogs.blogSeleccionado.id),
      };
    case types.blogPurga:
      return initialState;
    // Likes
    case types.blogCargaLikes:
      return {
        ...blogs,
        ...action.payload,
      };

    // Comentarios

    case types.blogAddComentario:
      console.log("Agregando Comentario");
      return {
        ...blogs,
        comentarios: [...blogs.comentarios, action.payload],
      };
    case types.blogRegistraComentarios:
      return {
        ...blogs,
        comentarios: action.payload,
      };
    case types.blogEditComentario:
      return {
        ...blogs,
        comentarios: blogs.comentarios.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case types.blogDeleteComentario:
      return {
        ...blogs,
        comentarios: blogs.comentarios.filter(
          (e) => e.id !== blogs.comentarios.id
        ),
      };
    default:
      return blogs;
  }
};
