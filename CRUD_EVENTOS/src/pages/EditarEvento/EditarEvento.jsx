// src/pages/EditarEvento/EditarEvento.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./EditarEvento.module.css";

function EditarEvento({ eventos, atualizarEvento }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventoOriginal = eventos.find((e) => e.id === parseInt(id));

  const [evento, setEvento] = useState(eventoOriginal || {});

  const handleChange = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    atualizarEvento(parseInt(id), evento);
    navigate("/eventos");
  };

  if (!eventoOriginal) return <p>Evento não encontrado</p>;

  return (
    <div className={style["editar-evento"]}>
      <div className={style.container}>
        <h2 className={style.title}>Editar Evento</h2>
        <form onSubmit={handleSubmit} className={style.form}>
          <input
            type="text"
            name="nome"
            value={evento.nome}
            onChange={handleChange}
            className={style.input}
          />
          <textarea
            name="descricao"
            value={evento.descricao}
            onChange={handleChange}
            className={style.textarea}
          />
          <input
            type="date"
            name="data"
            value={evento.data}
            onChange={handleChange}
            className={style.input}
          />
          <input
            type="text"
            name="local"
            value={evento.local}
            onChange={handleChange}
            className={style.input}
          />
          <input
            type="time"
            name="horario"
            value={evento.horario}
            onChange={handleChange}
            className={style.input}
          />
          <div className={style.btnWrapper}>
            <button type="submit" className={style.button}>
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarEvento;
