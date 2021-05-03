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
