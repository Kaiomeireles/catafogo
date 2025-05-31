// App.jsx atualizado com base nas rotas definidas para cada disciplina

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Documentacao from "./pages/Documentacao";
import Mapa from "./pages/Mapa";
import Simulador from "./pages/Simulador";
import Analise from "./pages/Analise";
import Relatorios from "./pages/Relatorios";
import Infraestrutura from "./pages/Infraestrutura";
import Pitch from "./pages/Pitch";
import './App.css';
import Navbar from "./components/Navbar";
 // ← Certo!

function App() {
  return (
    <Router>
      <Navbar /> {/* ← Aqui está o ajuste */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentacao" element={<Documentacao />} /> {/* Agile Methodology */}
        <Route path="/mapa" element={<Mapa />} /> {/* DDD + Sensores */}
        <Route path="/simulador" element={<Simulador />} /> {/* Dynamic Programming */}
        <Route path="/analise" element={<Analise />} /> {/* Data Science */}
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/infraestrutura" element={<Infraestrutura />} /> {/* Network */}
        <Route path="/pitch" element={<Pitch />} />
      </Routes>
    </Router>
  );
}

export default App;