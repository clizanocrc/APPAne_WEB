import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { LogoEmm } from "../../components/ui/atom/FormControls";
import { AuthContext } from "../../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    correo: "kaycrc@gmail.com",
    password: "123456",
    rememberme: false,
  });

  useEffect(() => {
    const correo = localStorage.getItem("correo");
    correo &&
      setForm((form) => ({
        ...form,
        rememberme: true,
        correo,
      }));
  }, []);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleCheck = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme,
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    form.rememberme
      ? localStorage.setItem("correo", form.correo)
      : localStorage.removeItem("correo");

    const { correo, password } = form;
    const { ok, msg } = await login(correo, password);
    if (!ok) {
      Swal.fire("Error", msg, "error");
    }
  };

  const todoOk = () => {
    return form.correo.length > 0 && form.password.length ? true : false;
  };

  return (
    <form
      className="login100-form validate-form flex-sb flex-w animate__animated animate__fadeInLeft"
      onSubmit={onSubmit}
    >
      <span className="login100-form-title mb-3">
        <LogoEmm />
        APP Ane - Ingreso
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="correo"
          name="correo"
          placeholder="correo"
          value={form.correo}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col" onClick={() => toggleCheck()}>
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberme"
            checked={form.rememberme}
            readOnly
          />
          <label className="label-checkbox100">Recordarme</label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          type="submit"
          disabled={!todoOk()}
          className="login100-form-btn"
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};
