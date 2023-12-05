import React, { useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CategoriaContext from "./CategoriaContext";
import { Button } from "primereact/button";
import { formatoMoeda } from "../../comuns/Uteis";

function Tabela() {
  const { alerta, listaObjetos, remover, editarObjeto, novoObjeto } =
    useContext(CategoriaContext);

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
        Nova Categoria
      </Button>
      <DataTable
        value={listaObjetos}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="codigo" header="Codigo"></Column>
        <Column field="nome" header="Nome"></Column>
        <Column header="Ações" body={botoes}></Column>
      </DataTable>
    </div>
  );
}

export default Tabela;
