import React, { useContext } from "react";
import { ItemAniversario } from "../../components/ui/atom/ItemAniversario";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";
import {
  aniversariosFuturos,
  aniversariosHoy,
  aniversariosPasados,
} from "../../helpers/matrimoniosFilter";

export const AniversariosPage = () => {
  const { matrimonios } = useContext(MatrimoniosContext);
  const { sacerdotes } = matrimonios;

  const sacerdotesTransform = [];
  sacerdotes.map((sacerdote) =>
    // const {fechaOrdenacion, ...resto} = sacerdote
    sacerdotesTransform.push({
      ...sacerdote,
      fechaMatrimonio: sacerdote.fechaOrdenacion,
    })
  );

  const aniversarios = matrimonios.matrimonios.concat(sacerdotesTransform);
  const aniHoy = aniversariosHoy(aniversarios);
  const aniPas = aniversariosPasados(aniversarios);
  const aniFut = aniversariosFuturos(aniversarios);

  return (
    <div style={{ height: "87vh", overflowY: "scroll" }}>
      <h6>Aniversarios</h6>

      {aniHoy.length > 0 ? (
        <>
          <h6 className="mt-3 mb-2">Aniversarios de Hoy</h6>
          {aniHoy.map((item) => (
            <ItemAniversario key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h6 className="mt-3 mb-2">* Hoy no hay Aniversarios</h6>
      )}

      {aniFut.length > 0 ? (
        <>
          <h6 className="mt-3 mb-2">Aniversarios por venir</h6>
          {aniFut.map((item) => (
            <ItemAniversario key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h6 className="mt-3 mb-2">* No hay aniversarios futuros</h6>
      )}

      {aniPas.length > 0 ? (
        <>
          <h6 className="mt-3 mb-2">Aniversarios pasados</h6>
          {aniPas.map((item) => (
            <ItemAniversario key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h6 className="mt-3 mb-2">* No hay aniversarios pasados</h6>
      )}
    </div>
  );
};
