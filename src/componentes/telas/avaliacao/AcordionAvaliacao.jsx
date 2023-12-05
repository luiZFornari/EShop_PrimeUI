import { useContext } from "react";
import Autenticacao from "../../seguranca/Autenticacao";
import AvaliacaoContext from "./AvaliacaoContext";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import "primeicons/primeicons.css";

function AcordionAvaliacao(props) {
  const { novoObjeto, listaAvaliacoes, editarObjeto, remover } =
    useContext(AvaliacaoContext);

  let mediaAvaliacao = 0;
  if (listaAvaliacoes.length > 0) {
    listaAvaliacoes.map((objeto) => (mediaAvaliacao += objeto.nota));
    mediaAvaliacao = mediaAvaliacao / listaAvaliacoes.length;
  }

  const autenticacao = Autenticacao.pegaAutenticacao();

  return (
    <Accordion className="p-3">
      <AccordionTab
        header={
          <div className="flex align-items-center">
            <span className="vertical-align-middle"> Avaliações</span>
          </div>
        }
      >
        <Button
          className="w-full justify-content-center "
          onClick={() => novoObjeto()}
        >
          Nova Avaliação
        </Button>
        {listaAvaliacoes.map((objeto) => (
          <Fieldset
            legend={<Rating value={objeto.nota} readOnly cancel={false} />}
            className="my-3"
            key={objeto.codigo}
          >
            <div className="flex flex-column">
              <div className="flex align-items-center justify-content-between h-1rem  font-bold border-round m-1">
                <div className="p-1">{objeto.autor}</div>
                {autenticacao && (
                  <div>
                    <Button
                      key="editar"
                      onClick={() => editarObjeto(objeto.codigo)}
                      aria-label="Editar"
                      size="small"
                      className="p-2 mr-1"
                    >
                      <i className="pi pi-pencil" />
                    </Button>
                    <Button
                      key="remover"
                      onClick={() => remover(objeto.codigo)}
                      aria-label="Apagar"
                      severity="danger"
                      size="small"
                      className="p-2"
                    >
                      <i className="pi pi-trash" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex align-items-center justify-content-center h-2rem  font-bold border-round m-2">
                {objeto.texto}
              </div>
              <div className="flex align-items-center justify-content-center h-2rem  font-bold border-round m-2">
                {objeto.data}
              </div>
            </div>
          </Fieldset>
        ))}
      </AccordionTab>
    </Accordion>
  );
}

export default AcordionAvaliacao;
