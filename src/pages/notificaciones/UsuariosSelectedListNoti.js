import React, { useContext, useState } from "react";
import { TextAreaView } from "../../components/ui/atom/FormControls";
import { SocketContext } from "../../context/SocketContext";

export const UsuariosSelectedListNoti = () => {
  const { socketState } = useContext(SocketContext);
  const [selectNombres, setSelectNombres] = useState("");

  const armaNombres = (props) => {
    setSelectNombres("");

    return socketState.usuariosSeleccionados.map((usuario) =>
      setSelectNombres(selectNombres + usuario.nombre + " ,")
    );
  };

  return <TextAreaView label={"Destinatarios"} value={armaNombres} />;
};
