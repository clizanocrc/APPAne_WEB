import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/emm.png";

export const TextControl = ({ label, name, value, callBack }) => {
  return (
    <div className="input-group mb-2" style={{ alignItems: "center" }}>
      <label className="mr-2 col-md-4" style={{ textAlign: "end" }}>
        {label}:
      </label>
      <input
        type="text"
        className="form-control mr-2 col-md-12"
        name={name}
        placeholder={label}
        value={value}
        onChange={callBack}
      />
    </div>
  );
};

export const Search = ({ label, name, value, callBack, onEnd }) => {
  return (
    <div className="input-group mb-2 ml-5" style={{ alignItems: "center" }}>
      <Link onClick={onEnd} to={""}>
        <i className="fa fa-search bigicon mr-3" style={{ color: "gray" }}></i>
      </Link>
      <input
        type="text"
        className="form-control mr-2 col-md-12"
        name={name}
        placeholder={label}
        value={value}
        onChange={callBack}
        style={{ backgroundColor: "lightgray" }}
      />
    </div>
  );
};

export const SiNoControl = ({ label, name, value, callBack }) => {
  return (
    <div className="input-group mb-2" style={{ alignItems: "center" }}>
      <label className="mr-2 col-md-4" style={{ textAlign: "end" }}>
        {label}
      </label>
      <select
        className="form-control col-md-2"
        name={name}
        value={value}
        onChange={callBack}
      >
        <option value="1">SI</option>
        <option value="0">NO</option>
      </select>
    </div>
  );
};

export const BloqueControl = ({ label, name, value, callBack }) => {
  return (
    <div className="input-group mb-2" style={{ alignItems: "center" }}>
      <label className="mr-2 col-md-4" style={{ textAlign: "end" }}>
        {label}
      </label>
      <select
        className="form-control col-md-6"
        name={name}
        value={value}
        onChange={callBack}
      >
        <option value="Primero">Primero</option>
        <option value="Segundo">Segundo</option>
        <option value="Tercero">Tercero</option>
        <option value="Honorario">Honorario</option>
      </select>
    </div>
  );
};

export const RoleControl = ({ label, name, value, callBack }) => {
  return (
    <div className="input-group mb-2" style={{ alignItems: "center" }}>
      <label className="mr-2 col-md-4" style={{ textAlign: "end" }}>
        {label}
      </label>
      <select
        className="form-control col-md-6"
        name={name}
        value={value}
        onChange={callBack}
      >
        <option value="SUPER_ADMIN_ROLE">Super Administrador</option>
        <option value="ADMIN_ROLE">Administrador</option>
        <option value="USER_ROLE">Usuario</option>
        <option value="NEW_USER_ROLE">Nuevo Usuario</option>
      </select>
    </div>
  );
};

export const SelectItems = ({ label, name, value, callBack, data }) => {
  return (
    <div className="input-group mb-2" style={{ alignItems: "center" }}>
      <label className="mr-2 col-md-4" style={{ textAlign: "end" }}>
        {label}
      </label>
      <select
        className="form-control col-md-10"
        name={name}
        value={value}
        onChange={callBack}
      >
        <option value="0">Selecciona un Valor</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export const SelectDateddMM = ({ label, name, value, callBack }) => {
  return (
    <div className="input-group mb-2" style={{ alignItems: "center" }}>
      <label className="mr-2 col-md-4" style={{ textAlign: "end" }}>
        {label}
      </label>
      <DatePicker
        className="form-control col-md-5"
        onChange={callBack}
        name={name}
        selected={value}
        dateFormat="dd/MM"
      />
    </div>
  );
};

export const TextArea = ({ label, name, value, callBack }) => {
  return (
    <div>
      <span className="col-md-1 col-md-offset-2 text-left">
        <label>
          <i className="fa fa-pencil-square-o bigicon mr-3"></i>
          {label}
        </label>
      </span>
      <div>
        <textarea
          className="form-control"
          name={name}
          placeholder={label}
          rows="3"
          value={value}
          onChange={callBack}
        ></textarea>
      </div>
    </div>
  );
};

export const SelectItemsView = ({ label, value, data }) => {
  return (
    <div
      className="input-group mb-2 col-md-12"
      style={{ alignItems: "center" }}
    >
      <label className="mr-2  col-md-2" style={{ textAlign: "end" }}>
        {label}
      </label>
      <select className="form-control col-md-8" value={value} disabled>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export const TextControlView = ({ label, value }) => {
  return (
    <div
      className="input-group mb-2 col-md-12"
      style={{ alignItems: "center" }}
    >
      <label className="mr-2  col-md-2" style={{ textAlign: "end" }}>
        {label}:
      </label>
      <input
        type="text"
        className="form-control mr-2 col-md-8"
        // placeholder={label}
        value={value}
        disabled
      />
    </div>
  );
};

export const BloqueControlView = ({ label, value }) => {
  return (
    <div
      className="input-group mb-2 col-md-12"
      style={{ alignItems: "center" }}
    >
      <label className="mr-2 col-md-2" style={{ textAlign: "end" }}>
        {label}
      </label>
      <select className="form-control col-md-8" value={value} disabled>
        <option value="Primero">Primero</option>
        <option value="Segundo">Segundo</option>
        <option value="Tercero">Tercero</option>
        <option value="Honorario">Honorario</option>
      </select>
    </div>
  );
};

export const SiNoControlView = ({ label, value }) => {
  return (
    <div
      className="input-group mb-2 col-md-12"
      style={{ alignItems: "center" }}
    >
      <label className="mr-2 col-md-2" style={{ textAlign: "end" }}>
        {label}
      </label>
      <select className="form-control col-md-2" value={value} disabled>
        <option value="1">SI</option>
        <option value="0">NO</option>
      </select>
    </div>
  );
};

export const SelectDateddMMView = ({ label, value }) => {
  return (
    <div
      className="input-group mb-2 col-md-12"
      style={{ alignItems: "center" }}
    >
      <label className="mr-2 col-md-2" style={{ textAlign: "end" }}>
        {label}
      </label>
      <DatePicker
        className="form-control col-md-6"
        selected={value}
        dateFormat="dd/MM"
        disabled
      />
    </div>
  );
};

export const TextAreaView = ({ label, value }) => {
  return (
    <div>
      <span className="col-md-1 col-md-offset-2 text-left">
        <label>
          <i className="fa fa-pencil-square-o bigicon mr-3"></i>
          {label}
        </label>
      </span>
      <div>
        <textarea
          className="form-control"
          // placeholder={label}
          rows="3"
          value={value}
          disabled
        ></textarea>
      </div>
    </div>
  );
};

export const LogoEmm = () => {
  return <img src={logo} alt="Logo" width="100" height="120" />;
};

export const TextControlCol = ({
  label,
  name,
  value,
  callBack,
  activado = true,
}) => {
  return (
    <input
      type="text"
      className="form-control"
      name={name}
      placeholder={label}
      value={value}
      onChange={callBack}
      disabled={!activado}
    />
  );
};
export const SiNoControlCol = ({ name, value, callBack, activado = true }) => {
  return (
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={callBack}
      disabled={!activado}
    >
      <option value={true}>SI</option>
      <option value={false}>NO</option>
    </select>
  );
};

export const RoleControlCol = ({ name, value, callBack, activado = true }) => {
  return (
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={callBack}
      disabled={!activado}
    >
      <option value="SUPER_ADMIN_ROLE">Super Administrador</option>
      <option value="ADMIN_ROLE">Administrador</option>
      <option value="USER_ROLE">Usuario</option>
      <option value="NEW_USER_ROLE">Nuevo Usuario</option>
    </select>
  );
};

export const RoleControlColAlta = ({ name, value, callBack }) => {
  return (
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={callBack}
    >
      <option value="USER_ROLE">Usuario</option>
      <option value="NEW_USER_ROLE">Nuevo Usuario</option>
    </select>
  );
};
