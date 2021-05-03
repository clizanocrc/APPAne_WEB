export const matrimoniosXDiocesis = ({ diocesis }, { matrimonios }) => {
  const diocesisDB = [];
  const diocesisMatrimonios = [];
  const diocesisContador = [];
  diocesis.map((d) => diocesisDB.push(d.nombre));
  matrimonios.map((e) => diocesisMatrimonios.push(e.diocesis));
  for (var i = 0; i < diocesisMatrimonios.length; i++) {
    if (!(diocesisMatrimonios[i] in diocesisContador)) {
      diocesisContador[diocesisMatrimonios[i]] = 1;
    } else {
      diocesisContador[diocesisMatrimonios[i]]++;
    }
  }
  return diocesisContador;
};

export const comentariosAvg = (id, comentarios = []) => {
  const comentariosBlog = comentarios.filter(
    (coment) => coment.blogentrada === id
  );
  return comentariosBlog.length;
};

export const blogsXCategoria = (categorias, blogs) => {
  const categoriasDB = [];
  const categoriasBlogs = [];
  const categoriasContador = [];

  categorias.map((d) => categoriasDB.push(d.descripcion));
  blogs.map((e) => categoriasBlogs.push(e.categoria.descripcion));

  for (var i = 0; i < categoriasBlogs.length; i++) {
    if (!(categoriasBlogs[i] in categoriasContador)) {
      categoriasContador[categoriasBlogs[i]] = 1;
    } else {
      categoriasContador[categoriasBlogs[i]]++;
    }
  }
  return categoriasContador;
};
