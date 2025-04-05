// src/pages/Eventos/Eventos.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from "./Eventos.module.css";

function Eventos({ eventos, removerEvento }) {
  return (
    <div className={style.eventosContainer}>
      <h2 className={style.titulo}>🎯 Gerenciar Eventos</h2>

      <div className={style.acaoSuperior}>
        <Link to="/cadastrar" className={style.botaoNovoEvento}>
          ➕ Novo Evento
        </Link>
      </div>

      <div className={style.lista}>
        {eventos.length === 0 ? (
          <p className={style.semEventos}>Nenhum evento cadastrado.</p>
        ) : (
          eventos.map((evento) => (
            <div key={evento.id} className={style.cartao}>
              <h3>{evento.nome}</h3>
              <p><strong>📍 Local:</strong> {evento.local}</p>
              <p><strong>🗓️ Data:</strong> {evento.data}</p>
              <p><strong>⏰ Horário:</strong> {evento.horario}</p>
              <p>{evento.descricao}</p>

              <div className={style.botoes}>
                <Link to={`/editar/${evento.id}`} className={style.botaoEditar}>
                  ✏️ Editar
                </Link>
                <button
                  onClick={() => removerEvento(evento.id)}
                  className={style.botaoExcluir}
                >
                  🗑️ Excluir
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Eventos;
