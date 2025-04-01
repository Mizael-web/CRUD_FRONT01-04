import React, { useState } from "react";
import style from "./CadastrarEvento.module.css"; // Importação do CSS Module

function CadastrarEvento() {
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
    // Aqui você pode adicionar o código para salvar o evento
  };

  return (
    <div className={style["cadastrar-evento"]}>
      <h2 className={style.title}>Cadastrar Novo Evento</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do evento"
          value={evento.nome}
          onChange={handleChange}
          className={style.input}
        />
        <textarea
          name="descricao"
          placeholder="Descrição do evento"
          value={evento.descricao}
          onChange={handleChange}
          className={style.textarea}
        ></textarea> {/* Certifique-se de fechar corretamente a tag */}
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
          placeholder="Local do evento"
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
        <button type="submit" className={style.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastrarEvento;
