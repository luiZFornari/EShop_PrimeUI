import { Menubar } from "primereact/menubar";
import { NavLink, Outlet } from "react-router-dom";
import Autenticacao from "./seguranca/Autenticacao";

function MenuPrivado() {
  const autenticacao = Autenticacao.pegaAutenticacao();

  const items = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: autenticacao ? "Usuário: " + autenticacao.nome_usuario : "Usuário",
      items: [
        {
          label: autenticacao ? "Logout" : "Login",
          command: autenticacao && (() => Autenticacao.logout()),
          url: autenticacao ? "/" : "/login",
        },
      ],
    },
    {
      label: "Sobre",
      url: "/sobre",
    },
    {
      label: "Manutenções",
      items: [
        {
          label: "Produtos",
          url: "/privado/produtos",
        },
        {
          label: "Categorias",
          url: "/privado/categorias",
        },
      ],
    },
  ];

  const start = (
    <NavLink exact to="/">
      <h2 style={{ color: "black" }}>EShop</h2>
    </NavLink>
  );

  return (
    <div>
      <Menubar model={items} start={start} />
      <Outlet />
    </div>
  );
}
export default MenuPrivado;
