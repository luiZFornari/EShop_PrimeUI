import React from "react";
import { Dropdown } from "primereact/dropdown";

export default function CampoSelect({
  id,
  label,
  tipo,
  name,
  value,
  onchange,
  requerido,
  readonly,
  maxlength,
  msgvalido,
  msginvalido,
  placeholder,
  dados,
  optionLabel,
  optionValue,
}) {
  const campoVazio = (value) => {
    return value === undefined || value === null || value === "";
  };

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Dropdown
        readOnly={readonly}
        optionLabel={optionLabel}
        id={id}
        options={dados}
        name={name}
        value={value}
        onChange={onchange}
        optionValue={optionValue}
        required={requerido}
        className={`surface-overlay border-round w-full ${
          campoVazio(value) ? "p-invalid" : ""
        }`}
      />
      {campoVazio(value) ? (
        <small id="username-help">{msginvalido}</small>
      ) : (
        <small id="username-help">{msgvalido}</small>
      )}
    </div>
  );
}
