import { InputText } from "primereact/inputtext";

function CampoEntrada({
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
}) {
  const campoVazio = value;
  return (
    <div className="field ">
      <label htmlFor={id}>{label}</label>
      <InputText
        className={`surface-overlay p-2 border-round w-full ${
          campoVazio ? " " : "p-invalid"
        }`}
        readOnly={readonly}
        type={tipo}
        id={id}
        name={name}
        value={value}
        onChange={onchange}
        required={requerido}
        maxLength={maxlength}
      />
      {campoVazio ? (
        <small id="username-help ">{msgvalido}</small>
      ) : (
        <small id="username-help ">{msginvalido}</small>
      )}
    </div>
  );
}

export default CampoEntrada;
