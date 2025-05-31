import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Documentacao() {
  return (
    <div id="root" className="body-padding">

      {/* Navbar fixa */}
      <nav className="navbar">
        <Link to="/">Início</Link>
        <Link to="/documentacao">Documentação</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      {/* Carrossel de Imagens */}
      <div className="mb-12">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          swipeable
          emulateTouch
        >
          <div>
            <img src="/img/catafogo.png" alt="Incêndio florestal em ação" />
            <p className="legend">Monitoramento em tempo real</p>
          </div>
          <div>
            <img src="/img/sensores.png" alt="Sensores de alta tecnologia" />
            <p className="legend">Sensores com IA integrados</p>
          </div>
          <div>
            <img src="/img/mapa.png" alt="Mapa de calor" />
            <p className="legend">Mapas preditivos dinâmicos</p>
          </div>
        </Carousel>
      </div>

      {/* Introdução */}
      <header className="mb-8">
        <h1>CataFogo: Monitoramento e Combate a Queimadas</h1>
        <p>Uma plataforma inteligente que utiliza IA, dados climáticos e sensores para detectar, analisar e reagir a incêndios em tempo real.</p>
      </header>

      {/* Equipe */}
<section className="equipe-section">
  <h2>Equipe</h2>
  <div className="equipe-container">
    <div className="membro">
      <img src="/img/Kaio.png" alt="Kaio Vinicius Meireles Alves" className="foto-perfil" />
      <p><strong>Kaio Vinicius Meireles Alves</strong><br />RM: 553282</p>
    </div>
    <div className="membro">
      <img src="/img/lucas.png" alt="Lucas Alves de Souza" className="foto-perfil" />
      <p><strong>Lucas Alves de Souza</strong><br />RM: 553956</p>
    </div>
  </div>
</section>

      {/* Desafio e Solução */}
      <section>
        <h2>Desafio e Solução</h2>
        <p>Queimadas têm origem majoritariamente humana, agravadas por mudanças climáticas. A detecção tardia e a falta de integração entre os dados dificultam o combate eficiente. A solução é a plataforma <strong>CataFogo</strong>, que integra dados climáticos, focos de calor e mapas de risco para alertar autoridades e direcionar ações de resposta com rapidez e precisão.</p>
      </section>

      {/* Funcionalidades */}
      <section>
        <h2>Funcionalidades da Plataforma</h2>
        <ul>
          <li>Monitoramento em tempo real com sensores e dados de satélite</li>
          <li>Mapas interativos e análises preditivas</li>
          <li>Alertas automáticos por app, SMS e e-mail</li>
          <li>Painéis táticos para tomada de decisão</li>
          <li>Integração entre Corpo de Bombeiros, Defesa Civil e ONGs</li>
        </ul>
      </section>

      {/* Público-Alvo */}
      <section>
        <h2>Público-Alvo</h2>
        <ul>
          <li>Corpo de Bombeiros e Defesa Civil</li>
          <li>Órgãos ambientais (IBAMA, ICMBio)</li>
          <li>Prefeituras e secretarias estaduais</li>
          <li>Empresas agrícolas e seguradoras</li>
          <li>População das regiões afetadas</li>
        </ul>
      </section>

      {/* Impacto Esperado */}
      <section>
        <h2>Impacto Esperado</h2>
        <ul>
          <li><strong>Ambiental:</strong> redução de até 30% nas áreas queimadas</li>
          <li><strong>Saúde:</strong> menos internações por doenças respiratórias</li>
          <li><strong>Econômico:</strong> proteção ao agronegócio e redução de perdas</li>
          <li><strong>Social:</strong> mais segurança para comunidades vulneráveis</li>
        </ul>
      </section>

      {/* Personas */}
      <section>
        <h2>Personas</h2>
        <p><strong>Capitão Luiz Almeida</strong>: Bombeiro experiente que usa os alertas e mapas da plataforma para organizar as ações.</p>
        <p><strong>Ana Souza</strong>: Agente da Defesa Civil que precisa de integração entre equipes e reação rápida.</p>
      </section>

      {/* Requisitos */}
      <section>
        <h2>Requisitos do Sistema</h2>
        <h3>Funcionais</h3>
        <ul>
          <li>Detecção automática de incêndios</li>
          <li>Geração de alertas e relatórios</li>
        </ul>
        <h3>Não-funcionais</h3>
        <ul>
          <li>Alta disponibilidade, escalabilidade, segurança</li>
        </ul>
        <h3>Técnicos</h3>
        <ul>
          <li>React, PostgreSQL/MongoDB, APIs REST, Docker</li>
        </ul>
      </section>

      {/* Regras de Negócio */}
      <section>
        <h2>Regras de Negócio</h2>
        <ul>
          <li>Classificação automática de alertas</li>
          <li>Relatórios e rastreabilidade de ações</li>
        </ul>
      </section>

      {/* Link para PDF */}
      <section className="text-center">
        <a
          href="/pdfs/Documento1.pdf"
          download
          className="button"
        >
          📄 Baixar Documento Completo (PDF)
        </a>
      </section>

    </div>
  );
}