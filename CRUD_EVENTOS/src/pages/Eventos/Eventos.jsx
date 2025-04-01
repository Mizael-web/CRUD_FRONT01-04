// src/pages/eventos/Eventos.jsx
import React from "react";
import style from "./Eventos.module.css"// Importação do CSS específico dos Eventos

function Eventos() {
  return (
    <div className={style.Eventos}>
      <h2>Lista de Eventos</h2>
      {/* Aqui você pode listar os eventos com opções de editar ou excluir */}
    </div>
  );
}

export default Eventos;
