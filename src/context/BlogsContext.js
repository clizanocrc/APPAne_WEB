import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { blogReducer } from "../reducers/blogReducer";
import {
  registraBlogs,
  seleccionaBlog,
  limpiaBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  cargaLikes,
  addComentario,
  addComentarios,
  updateComentario,
  deleteComentario,
} from "./actions/blogActions";
import { initialState } from "./initialState/blogInitialState";

export const BlogsContext = createContext();
const limite = 1000;
const desde = 0;

export const BlogsProvider = ({ children }) => {
  const [blogs, dispatch] = useReducer(blogReducer, initialState);

  //#region Blog
  //Carga todos los Blogs
  const cargaBlogs = async () => {
    try {
      const resp = await fetchConToken(`blogs?limite=${limite}&desde=${desde}`);
      if (resp.ok) {
        registraBlogs(resp, dispatch);
      } else {
        limpiaBlogs(dispatch);
        Swal.fire("error", resp.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const selecBlog = (blog) => {
    seleccionaBlog(blog, dispatch);
  };

  const purgaBlogs = () => {
    limpiaBlogs(dispatch);
  };

  const agregaBlog = (data) => {
    addBlog(data, dispatch);
  };

  const editarBlog = (data) => {
    updateBlog(data, dispatch);
  };

  const eliminarBlog = (data) => {
    deleteBlog(data, dispatch);
  };
  //#endregion Blog
  //#region Likes
  //Likes
  const registraLike = async (id) => {
    const resp = await fetchConToken(`blogs/like/${id}`, { id }, "POST");
    return resp;
  };
  const registraLiks = async (data) => {
    cargaLikes(data, dispatch);
  };
  //#endregion
  //#region Comentarios
  const registraComentario = async (data) => {
    addComentario(data, dispatch);
  };

  const registraComentarios = async (data) => {
    addComentarios(data, dispatch);
  };

  const editarComentario = async (data) => {
    updateComentario(data, dispatch);
  };

  const eliminarComentario = async (data) => {
    deleteComentario(data, dispatch);
  };
  //#endregion
  return (
    <BlogsContext.Provider
      value={{
        blogs,
        cargaBlogs,
        purgaBlogs,
        selecBlog,
        agregaBlog,
        editarBlog,
        eliminarBlog,
        registraLike,
        registraLiks,
        registraComentario,
        registraComentarios,
        editarComentario,
        eliminarComentario,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
};
