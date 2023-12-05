import { Dialog } from "primereact/dialog";

function DialogoSimples(props) {
  const Header = (props) => <h2>{props.titulo}</h2>;

  const Footer = (props) => (
    <Button onClick={() => props.setOpen(false)}>Fechar</Button>
  );

  return (
    <Dialog
      header={Header(props)}
      visible={props.open}
      style={{ width: props.maxWidth }}
      onHide={() => setVisible(false)}
      footer={Footer(props)}
      onClose={() => props.setOpen(false)}
      fullWidth={true}
    >
      {props.children}
    </Dialog>
  );
}

export default DialogoSimples;
