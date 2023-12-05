import React, { useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ProdutoContext from "./ProdutoContext";
import { Button } from "primereact/button";
import { formatoMoeda } from "../../comuns/Uteis";

function Tabela() {
  const { alerta, listaObjetos, remover, editarObjeto, novoObjeto } =
    useContext(ProdutoContext);

  const moeda = (product) => {
    return formatoMoeda(product.valor);
  };

  const ativo = (product) => {
    return product.ativo ? "Sim" : "Nao";
  };

  const botoes = (objeto) => {
    return (
      <>
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
      </>
    );
  };

  return (
    <div>
      <Button
        className="w-full justify-content-center "
        onClick={() => novoObjeto()}
      >
        Nova Avaliação
      </Button>
      <DataTable
        value={listaObjetos}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="codigo" header="Codigo"></Column>
        <Column field="nome" header="Nome"></Column>
        <Column field="descricao" header="Descrição"></Column>
        <Column field="quantidade_estoque" header="Quantidade"></Column>
        <Column field="valor" header="Valor" body={moeda}></Column>
        <Column field="ativo" header="Ativo" body={ativo}></Column>
        <Column field="data_cadastro" header="Cadastro"></Column>
        <Column field="categoria_nome" header="Categoria"></Column>
        <Column header="Ações" body={botoes}></Column>
      </DataTable>
    </div>
  );
}

export default Tabela;
