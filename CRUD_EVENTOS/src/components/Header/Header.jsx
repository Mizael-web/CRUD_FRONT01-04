// src/components/header/Header.jsx
import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <h1>Bem-vindo ao Sistema de Eventos</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/eventos">Eventos</a></li>
          <li><a href="/cadastrar">Cadastrar Evento</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
