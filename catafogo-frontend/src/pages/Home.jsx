import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="body-padding">
      {/* Carrossel de Imagens de Destaque */}
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
          <img src="/img/inicio.png" alt="CataFogo: Monitoramento em ação" />
          <p className="legend">CataFogo: IA na prevenção de queimadas</p>
        </div>
        <div>
          <img src="/img/logo.png" alt="Sensores inteligentes" />
          <p className="legend">Sensores e dados em tempo real</p>
        </div>
      </Carousel>

      {/* Seção de Apresentação */}
      <section className="card mt-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Bem-vindo ao CataFogo 🔥</h1>
        <p className="text-lg text-justify">
          O <strong>CataFogo</strong> é uma plataforma web inteligente criada para monitorar, prever e combater queimadas no Brasil. Integrando sensores, dados climáticos e inteligência artificial, nossa solução oferece alertas em tempo real, mapas interativos e painéis de apoio à decisão. Este site apresenta nossa proposta desenvolvida ao longo da Global Solution, abordando todas as disciplinas envolvidas no projeto.
        </p>
      </section>

      {/* Seções por Disciplina */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Metodologias Ágeis</h2>
          <img src="/img/agil.jpg" alt="Kanban ágil" className="mb-2 rounded-lg" />
          <p>Aplicamos SCRUM com backlog, sprints e papéis definidos. As histórias de usuário e critérios de aceite estão detalhados na seção de documentação.</p>
          <Link to="/documentacao" className="button mt-2 inline-block">Ver Documentação</Link>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Banco de Dados</h2>
          <img src="/img/db.jpg" alt="Modelo de dados" className="mb-2 rounded-lg" />
          <p>O sistema utiliza PostgreSQL com modelagem relacional e integração via API. Desenvolvemos modelo ER, scripts DDL e consultas SQL eficientes.</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Back-End Java</h2>
          <img src="/img/backend.jpg" alt="Java Spring" className="mb-2 rounded-lg" />
          <p>Desenvolvido com Spring Boot, com endpoints RESTful, autenticação segura e conexão com o banco. O código é modular e testável.</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Front-End</h2>
          <img src="/img/frontend.jpg" alt="Frontend moderno" className="mb-2 rounded-lg" />
          <p>Utilizamos React com Tailwind CSS para criar uma interface moderna, acessível e responsiva. Integração completa com a API e dados dinâmicos.</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Inteligência Artificial</h2>
          <img src="/img/ia.jpg" alt="IA e mapa preditivo" className="mb-2 rounded-lg" />
          <p>Integramos modelos preditivos para análise de propagação do fogo com base em clima, histórico e geolocalização. IA integrada aos alertas.</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Geoprocessamento</h2>
          <img src="/img/mapa-gis.jpg" alt="Mapa interativo" className="mb-2 rounded-lg" />
          <p>Mapas interativos com dados espaciais, zonas de risco e camadas customizadas via Leaflet e Mapbox. Geolocalização integrada aos sensores.</p>
        </div>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        © 2025 CataFogo. Todos os direitos reservados.
      </footer>
    </div>
  );
}