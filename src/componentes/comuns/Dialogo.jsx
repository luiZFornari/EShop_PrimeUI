import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Alerta from "./Alerta";

function Dialogo(props) {
  const Header = () => (
    <div>
      <h5>{props.titulo}</h5>
      <div>
        <Alerta alerta={props.alerta} />
      </div>
    </div>
  );

  return (
    <Dialog
      header={Header(props)}
      visible={props.open}
      style={{ width: "80%" }}
      onHide={() => props.setOpen(false)}
    >
      <form id={props.idform} onSubmit={props.acaoCadastrar}>
        <div className="flex flex-column p-1">{props.children}</div>

        <Button type="submit" className="w-full justify-content-center">
          Salvar
        </Button>
      </form>
    </Dialog>
  );
}

export default Dialogo;
