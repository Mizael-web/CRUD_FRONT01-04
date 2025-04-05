// src/pages/Home/Home.jsx
import React from "react";
import style from "./Home.module.css";

function Home({ eventos }) {
  return (
    <div className={style.home}>
      <h2 className={style.titulo}>📅 Eventos Cadastrados</h2>
      <div className={style.grid}>
        {eventos.length === 0 ? (
          <p className={style.mensagem}>Nenhum evento cadastrado.</p>
        ) : (
          eventos.map((evento) => (
            <div key={evento.id} className={style.card}>
              <h3 className={style.nome}>{evento.nome}</h3>
              <p><strong>Descrição:</strong> {evento.descricao}</p>
              <p><strong>Data:</strong> {evento.data}</p>
              <p><strong>Horário:</strong> {evento.horario}</p>
              <p><strong>Local:</strong> {evento.local}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
