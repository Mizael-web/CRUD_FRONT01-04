// src/components/footer/Footer.jsx
import React from "react";
import style from "./Footer.module.css" // Importação do CSS específico do Footer

function Footer() {
  return (
    <footer className={style.footer}>
      <p>&copy; 2025 Sistema de Eventos. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
