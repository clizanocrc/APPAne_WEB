import { Divider } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import {
  TextControl,
  TextControlPass,
} from "../../components/ui/atom/FormControls";
import { AuthContext } from "../../context/AuthContext";
import FileUpload from "../../helpers/fileUpload";
import { useForm } from "../../hooks/useForm";
import defaultUser from "../../assets/defaultUser.png";
import { AppContext } from "../../context/AppContext";
import { exitoFire, viewErrors } from "../../helpers/messagesUI";

export const PerfilPage = () => {
  const { auth, updatePerfilUsuario, updatePassUsuario } = useContext(
    AuthContext
  );
  const { showModalLoading, hideModalLoading } = useContext(AppContext);

  const { correo, images, name, uid } = auth;
  const usuario = { correo, images, name };
  const [imgChange, setImgChange] = useState(false);
  const [passChange, setPassChange] = useState(false);
  const [dataChange, setDataChange] = useState(false);
  const [dataPassChange, setDataPassChange] = useState(false);

  const passInit = {
    passActual: "",
    passNew: "",
    rePassNew: "",
  };

  const [formValues, onChange, , setFormValues] = useForm(usuario);
  const [passValues, onChangePass] = useForm(passInit);

  const updateFilesCb = (e) => {
    setFormValues({
      ...formValues,
      images: e,
    });
  };

  useEffect(() => {
    if (
      correo !== formValues.correo ||
      name !== formValues.name ||
      images !== formValues.images
    ) {
      setDataChange(true);
    } else {
      setDataChange(false);
    }
  }, [formValues, correo, name, images]);

  useEffect(() => {
    if (
      passValues.passActual &&
      passValues.passNew &&
      passValues.rePassNew &&
      passValues.passNew === passValues.rePassNew
    ) {
      setDataPassChange(true);
    } else {
      setDataPassChange(false);
    }
  }, [passValues]);

  const handlePerfilSave = async (e) => {
    e.preventDefault();
    showModalLoading();
    const resp = await updatePerfilUsuario(uid, formValues, images);
    if (resp.ok) {
      exitoFire("Perfil actualizado...!");
    } else {
      viewErrors(resp);
    }
    hideModalLoading();
  };

  const handlePassChange = async (e) => {
    e.preventDefault();
    showModalLoading();
    const resp = await updatePassUsuario(uid, passValues);
    if (resp.ok) {
      exitoFire("Contraseña cambiada, debe iniciar sesión de nuevo...!", 3000);
    } else {
      viewErrors(resp);
    }

    hideModalLoading();
  };

  return (
    <div className="flexbox-container-row">
      <div className="col-md-2">
        <img
          src={formValues.images ? formValues.images : defaultUser}
          className="img-thumbnail animate__animated animate__fadeInDown mt-2 mb-2"
          alt={name}
        />
      </div>
      <div className="col-md-6 mt-5">
        <h6>Perfil de Usuario</h6>
        <Divider className="mt-2 mb-2" />
        <TextControl
          label={"Nombre*"}
          name={"name"}
          value={formValues.name}
          callBack={onChange}
        />
        <TextControl
          label={"Correo*"}
          name={"correo"}
          value={formValues.correo}
          callBack={onChange}
        />

        <div
          className="mt-4"
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <button
            className="btn btn-outline-warning mb-2 col-md-4"
            onClick={() => setPassChange(!passChange)}
          >
            Cambiar Contraseña
          </button>
          {passChange && (
            <>
              <Divider className="mt-2 mb-2" />
              <h4 className="mt-2 mb-2">Cambio de Contraseña</h4>
              <TextControlPass
                label={"Contraseña Actual"}
                name={"passActual"}
                value={passValues.passActual}
                callBack={onChangePass}
              />
              <Divider className="mt-2 mb-2" />
              <h6 className="mt-2 mb-2">Contraseñas deben ser iguales</h6>

              <TextControlPass
                label={"Nueva Contrseña"}
                name={"passNew"}
                value={passValues.passNew}
                callBack={onChangePass}
              />
              <TextControlPass
                label={"Repita Contraseña"}
                name={"rePassNew"}
                value={passValues.rePassNew}
                callBack={onChangePass}
              />
              <button
                className={
                  dataPassChange
                    ? "btn btn-primary mt-2 col-md-4"
                    : "btn btn-outline-primary mt-2 col-md-4"
                }
                onClick={handlePassChange}
                disabled={!dataPassChange}
              >
                Actualizar Contraseña
              </button>
            </>
          )}
          {!passChange && (
            <>
              <button
                className="btn btn-outline-warning mb-2 col-md-4"
                onClick={() => setImgChange(!imgChange)}
              >
                Cambiar Avatar
              </button>
              <button
                className={
                  !dataChange
                    ? "btn btn-outline-primary col-md-4"
                    : "btn btn-primary col-md-4"
                }
                onClick={handlePerfilSave}
                disabled={!dataChange}
              >
                Actualizar Perfil
              </button>
            </>
          )}
        </div>
      </div>
      <div className="col-md-4">
        {imgChange && (
          <FileUpload
            updateFilesCb={updateFilesCb}
            accept=".jpg,.png,.jpeg,.bmp"
            label="Foto de Perfil"
          />
        )}
      </div>
    </div>
  );
};
