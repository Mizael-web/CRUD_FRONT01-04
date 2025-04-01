// src/pages/editarEvento/EditarEvento.jsx
import React, { useState, useEffect } from "react";
import style from "./EditarEvento.module.css"; // Importação do CSS específico de Editar Evento

function EditarEvento() {
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data: "",
    local: "",
    horario: ""
  });

  useEffect(() => {
    // Aqui você pode carregar os dados do evento a partir de uma API ou banco de dados
    // Exemplo fictício para carregar o evento por ID
    // setEvento({
    //   nome: "Evento Exemplo",
    //   descricao: "Descrição do Evento",
    //   data: "2025-04-10",
    //   local: "Local do Evento",
    //   horario: "14:00"
    // });
  }, []);

  const handleChange = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para atualizar o evento
    console.log("Evento atualizado:", evento);
  };

  return (
    <div className={style.editarEvento}>
      <h2>Editar Evento</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={evento.nome}
          onChange={handleChange}
          className={style.inputField} // Usando CSS Modules para classe
        />
        <textarea
          name="descricao"
          value={evento.descricao}
          onChange={handleChange}
          className={style.inputField} // Usando CSS Modules para classe
        />
        <input
          type="date"
          name="data"
          value={evento.data}
          onChange={handleChange}
          className={style.inputField} // Usando CSS Modules para classe
        />
        <input
          type="text"
          name="local"
          value={evento.local}
          onChange={handleChange}
          className={style.inputField} // Usando CSS Modules para classe
        />
        <input
          type="time"
          name="horario"
          value={evento.horario}
          onChange={handleChange}
          className={style.inputField} // Usando CSS Modules para classe
        />
        <button type="submit" className={style.submitButton}>Atualizar</button>
      </form>
    </div>
  );
}

export default EditarEvento;
