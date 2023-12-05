import { useState, useEffect } from "react";
import { Message } from "primereact/message";

const Alerta = ({ alerta }) => {
  const [exibir, setExibir] = useState(false);

  useEffect(() => {
    setExibir(true);
    setTimeout(() => {
      setExibir(false);
    }, 4000);
  }, [alerta]);

  return (
    <>
      {alerta.message.length > 0 && exibir && (
        <Message
          text={alerta.message}
          severity={alerta.status === "error" ? "error" : "success"}
          summary={alerta.status === "error" ? "error" : "success"}
        />
      )}
    </>
  );
};

export default Alerta;
