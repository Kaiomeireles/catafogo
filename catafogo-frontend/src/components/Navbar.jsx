import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src="/img/faviconcatafogo.png" alt="Logo CataFogo" />
        </div>
        <div className="navbar-links">
          <Link to="/">Início</Link>
          <Link to="/documentacao">Documentação</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/simulador">Simulador</Link>
          <Link to="/analise">Análise</Link>
          <Link to="/relatorios">Relatórios</Link>
          <Link to="/infraestrutura">Infraestrutura</Link>
          <Link to="/pitch">Pitch</Link>
        </div>
      </div>
    </nav>
  );
}