import { useContext } from "react";
import { formatoMoeda } from "../../comuns/Uteis";
import AvaliacaoContext from "./AvaliacaoContext";
import { Fieldset } from "primereact/fieldset";
import { Accordion, AccordionTab } from "primereact/accordion";

function ItensProduto() {
  const { produto } = useContext(AvaliacaoContext);

  return (
    <>
      <div style={{ padding: "1%" }}>
        <Fieldset legend={<h3>{produto.nome}</h3>}>
          <div class="flex flex-column md:flex-column">
            <div class="flex align-items-center justify-content-between w-full  font-bold ">
              <div>Estoque: {produto.quantidade_estoque}</div>
              <div>Lançamento: {produto.data_cadastro}</div>
            </div>
            <div class="flex align-items-center justify-content-center  font-bold border-round m-2">
              {produto.ativo ? "Disponivel" : "Indisponivel"}
            </div>
            <div class="flex align-items-center justify-content-center p-3 ml-3 mr-3 text-white bg-green-500 font-bold border-round m-2">
              {formatoMoeda(produto.valor)}
            </div>
          </div>
        </Fieldset>
      </div>
      <Accordion className="p-3">
        <AccordionTab
          header={
            <div className="flex align-items-center">
              <span className="vertical-align-middle"> Descrição</span>
            </div>
          }
        >
          {produto.descricao}
        </AccordionTab>
      </Accordion>
    </>
  );
}

export default ItensProduto;
