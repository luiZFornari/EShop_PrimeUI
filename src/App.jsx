import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuPublico from "./componentes/MenuPublico";
import MenuPrivado from "./componentes/MenuPrivado";
import Login from "./componentes/telas/login/Login";
import Home from "./componentes/telas/home/Home";
import Avaliacao from "./componentes/telas/avaliacao/Avaliacao";
import Sobre from "./componentes/Sobre";
import NotFound from "./componentes/telas/NotFound";
import Produto from "./componentes/telas/produto/Produto";
import Categoria from "./componentes/telas/categoria/Categoria";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "categorias",
        element: <Categoria />,
      },
      {
        path: "produtos",
        element: <Produto />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
