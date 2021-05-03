import React, { useContext } from "react";
import { ItemCumpleanos } from "../../components/ui/atom/ItemCumpleanos";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";
import {
  cumpleanosFuturos,
  cumpleanosHoy,
  cumpleanosPasados,
} from "../../helpers/conyugesFilter";
import { ConyuguesContext } from "../../context/ConyuguesContext";

export const CumpleanosPage = ({ genero = "F" }) => {
  const { conyuges } = useContext(ConyuguesContext);
  const { matrimonios } = useContext(MatrimoniosContext);
  const { sacerdotes } = matrimonios;
  const conyugesFilter = conyuges.conyuges.filter(
    (item) => item.genero === genero
  );
  const sacerdotesTransform = [];
  if (genero === "M") {
    sacerdotes.map((sacerdote) =>
      sacerdotesTransform.push({
        ...sacerdote,
        nombre: sacerdote.nombrematrimonio,
        images: sacerdote.images,
        apellido: "",
        fechaNacimiento: sacerdote.fechaMatrimonio,
        sacerdote: sacerdote,
      })
    );
  }

  const aniversarios = conyugesFilter.concat(sacerdotesTransform);

  const aniHoy = cumpleanosHoy(aniversarios);
  const aniPas = cumpleanosPasados(aniversarios);
  const aniFut = cumpleanosFuturos(aniversarios);

  return (
    <div style={{ height: "85vh", overflowY: "scroll" }}>
      {genero === "F" ? <h6>Cumpleañeras</h6> : <h6>Cumpleañeros</h6>}

      {aniHoy.length > 0 ? (
        <>
          <h6 className="mt-3 mb-2">Cumpleaños de Hoy</h6>
          {aniHoy.map((item) => (
            <ItemCumpleanos key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h6 className="mt-3 mb-2">* Hoy no hay Cumpleaños</h6>
      )}

      {aniFut.length > 0 ? (
        <>
          <h6 className="mt-3 mb-2">Cumpleaños por venir</h6>
          {aniFut.map((item) => (
            <ItemCumpleanos key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h6 className="mt-3 mb-2">* No hay cumpleanos futuros</h6>
      )}

      {aniPas.length > 0 ? (
        <>
          <h6 className="mt-3 mb-2">Cumpleaños pasados</h6>
          {aniPas.map((item) => (
            <ItemCumpleanos key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h6 className="mt-3 mb-2">* No hay cumpleanos pasados</h6>
      )}
    </div>
  );
};
