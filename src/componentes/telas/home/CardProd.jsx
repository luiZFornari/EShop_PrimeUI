import { useContext } from "react";
import HomeContext from "./HomeContext";
import { formatoMoeda } from "../../comuns/Uteis";
import { NavLink } from "react-router-dom";
import { Card } from "primereact/card";

const CardProd = () => {
  const { listaObjetos } = useContext(HomeContext);

  const footer = (props) => (
    <>
      <h2>{formatoMoeda(props)}</h2>
    </>
  );

  const cardStyle = {
    width: "20rem",
    height: "15rem",
    borderRadius: "8px",
    margin: "1%",
    display: "inline-block", // Use display inline-block to prevent the extra space issue
  };

  return (
    <div
      className="flex align-items-center justify-content-center flex-wrap"
      style={{ margin: "1%" }}
    >
      {listaObjetos.length === 0 && (
        <div>
          <h5>Nenhum objeto encontrado</h5>
        </div>
      )}
      {listaObjetos.map((objeto) => (
        <div
          style={{ margin: "1%", display: "inline-block" }}
          key={objeto.codigo}
        >
          {objeto.ativo && (
            <NavLink exact to={`produto/${objeto.codigo}`}>
              <Card
                title={objeto.nome}
                footer={footer(objeto.valor)}
                subTitle={objeto.categoria_nome}
                style={cardStyle} // Aplicar estilo diretamente ao Card
              >
                <div>Estoque: {objeto.quantidade_estoque}</div>
              </Card>
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardProd;
