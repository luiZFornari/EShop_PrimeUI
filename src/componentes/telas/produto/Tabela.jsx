import { useContext, useMemo } from "react";
import Alerta from "../../comuns/Alerta";
import {
  Box,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Button from "@mui/material/Button";
import ProdutoContext from "./ProdutoContext";
import { formatoMoeda } from "../../comuns/Uteis";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Tabela() {
  const { alerta, listaObjetos, remover, editarObjeto, novoObjeto } =
    useContext(ProdutoContext);

  return (
    <Box sx={{ padding: "3%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Button
                  variant="contained"
                  aria-label="Novo Produto"
                  onClick={() => novoObjeto()}
                  sx={{ margin: "5px" }}
                >
                  Novo produto
                </Button>
              </TableCell>
              <TableCell>Codigo</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Descricao</TableCell>
              <TableCell align="left">Valor</TableCell>
              <TableCell align="left">Quantidade</TableCell>
              <TableCell align="left">Ativo</TableCell>
              <TableCell align="left">Cadastro</TableCell>
              <TableCell align="left">Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaObjetos.map((row) => (
              <TableRow
                key={row.codigo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Button
                    item
                    key="editar"
                    onClick={() => editarObjeto(row.codigo)}
                    title="Editar"
                    aria-label="Editar"
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    item
                    key="remover"
                    onClick={() => remover(row.codigo)}
                    title="Deletar"
                    aria-label="Deletar"
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.codigo}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.descricao}
                </TableCell>
                <TableCell component="th" scope="row">
                  {formatoMoeda(row.valor)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.quantidade_estoque}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.ativo ? "Sim" : "Nao"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.data_cadastro}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.categoria_nome}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Tabela;
