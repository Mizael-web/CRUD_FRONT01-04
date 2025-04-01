// src/components/FormularioEvento.js
import React, { useState, useEffect } from 'react';


function FormularioEvento({ eventoEditar, onSubmit }) {
  const [evento, setEvento] = useState({ nome: '', descricao: '', data: '', local: '', horario: '' });

  useEffect(() => {
    if (eventoEditar) {
      setEvento(eventoEditar);
    }
  }, [eventoEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(evento);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="nome" 
        value={evento.nome} 
        onChange={handleChange} 
        placeholder="Nome do Evento" 
        required 
      />
      <textarea 
        name="descricao" 
        value={evento.descricao} 
        onChange={handleChange} 
        placeholder="Descrição" 
        required 
      />
      <input 
        type="date" 
        name="data" 
        value={evento.data} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="local" 
        value={evento.local} 
        onChange={handleChange} 
        placeholder="Local" 
        required 
      />
      <input 
        type="time" 
        name="horario" 
        value={evento.horario} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default FormularioEvento;
