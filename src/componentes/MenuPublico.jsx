import { Menubar } from "primereact/menubar";
import { NavLink, Outlet } from "react-router-dom";

function MenuPublico() {
  const items = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Login",
      url: "/login",
    },
    {
      label: "Sobre",
      url: "/sobre",
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
export default MenuPublico;
