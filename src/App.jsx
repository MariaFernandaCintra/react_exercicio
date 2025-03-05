import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CriarEventos from "./pages/criarEventos";
import Evento from "./pages/listEvents";
import Organizador from "./pages/Organizador";
import Ingressos from "./pages/listIngressos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CriarEvento" element={<CriarEventos />} />
        <Route path="/Evento" element={<Evento />} />
        <Route path="/Organizador" element={<Organizador />} />
        <Route path="/Ingressos" element={<Ingressos />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
