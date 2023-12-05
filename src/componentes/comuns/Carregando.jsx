import { ProgressSpinner } from "primereact/progressspinner";

function Carregando(props) {
  const indicatorSize = 80;
  return (
    <>
      {!props.carregando ? (
        props.children
      ) : (
        <div style={{ padding: "20px" }}>
          <ProgressSpinner aria-label="Loading" />
        </div>
      )}
    </>
  );
}

export default Carregando;
