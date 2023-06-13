import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobremim";
import Menu from "./componentes/menu";
import Rodape from "componentes/rodape";
import Post from "paginas/post";
import NaoEncontrada from "paginas/naoencontrado";
import PaginaPadrao from "componentes/paginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;