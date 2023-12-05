import { Menubar } from "primereact/menubar";
import { NavLink, Outlet } from "react-router-dom";
import Autenticacao from "./seguranca/Autenticacao";
import { useState, useEffect } from "react";

function MenuPrivado() {
  const [autenticado, setAutenticado] = useState(
    Autenticacao.pegaAutenticacao()
  );

  useEffect(() => {
    // Atualiza o estado local quando a autenticação mudar em algum lugar da sua aplicação
    setAutenticado(Autenticacao.pegaAutenticacao());
  }, []);

  const handleLogout = () => {
    Autenticacao.logout();
    setAutenticado(false); // Define autenticado como false após o logout
  };

  const items = [
    {
      label: "Home",
      url: "/privado/",
    },
    {
      label: autenticado ? "Usuário: " + autenticado.nome_usuario : "Usuário",
      items: [
        {
          label: autenticado ? "Logout" : "Login",
          command: autenticado ? handleLogout : undefined,
          url: autenticado ? "/" : "/login",
        },
      ],
    },
    {
      label: "Sobre",
      url: "/privado/sobre",
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
    <NavLink exact to="/privado">
      <h2 style={{ color: "black", display: "inline-block" }}>EShop</h2>
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
