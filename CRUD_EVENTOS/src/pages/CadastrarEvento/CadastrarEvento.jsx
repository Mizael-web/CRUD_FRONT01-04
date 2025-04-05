// src/pages/CadastrarEvento/CadastrarEvento.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./CadastrarEvento.module.css";

function CadastrarEvento({ criarEvento }) {
  const navigate = useNavigate();

  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data: "",
    local: "",
    horario: ""
  });

  const handleChange = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    criarEvento(evento); // 🔥 Chamada correta aqui!
    navigate("/eventos"); // Redireciona após cadastrar
  };

  return (
    <div className={style["cadastrar-evento"]}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.title}>Cadastrar Novo Evento</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome do evento"
          value={evento.nome}
          onChange={handleChange}
          className={style.input}
          required
        />
        <textarea
          name="descricao"
          placeholder="Descrição do evento"
          value={evento.descricao}
          onChange={handleChange}
          className={style.textarea}
          required
        />
        <input
          type="date"
          name="data"
          value={evento.data}
          onChange={handleChange}
          className={style.input}
          required
        />
        <input
          type="text"
          name="local"
          placeholder="Local do evento"
          value={evento.local}
          onChange={handleChange}
          className={style.input}
          required
        />
        <input
          type="time"
          name="horario"
          value={evento.horario}
          onChange={handleChange}
          className={style.input}
          required
        />
        <div className={style.btnWrapper}>
          <button type="submit" className={style.button}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarEvento;
