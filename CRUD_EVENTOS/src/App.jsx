import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Eventos from "./pages/Eventos/Eventos";
import CadastrarEvento from "./pages/CadastrarEvento/CadastrarEvento";
import EditarEvento from "./pages/EditarEvento/EditarEvento";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [eventos, setEventos] = useState(() => {
    const dadosSalvos = localStorage.getItem("eventos");
    return dadosSalvos
      ? JSON.parse(dadosSalvos)
      : [
          {
            id: 1,
            nome: "Tech Conference 2025",
            descricao: "A conferência de tecnologia mais inovadora do ano...",
            data: "2025-05-01",
            local: "Centro de Convenções, São Paulo",
            horario: "09:00",
          },
          {
            id: 2,
            nome: "Hackathon 2025",
            descricao: "Evento de programação intensivo para devs...",
            data: "2025-06-15",
            local: "Campus de Inovação, Campinas",
            horario: "08:00",
          },
        ];
  });

  // Sempre que eventos mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }, [eventos]);

  const criarEvento = (novoEvento) => {
    novoEvento.id = Date.now(); // ID único baseado no tempo
    setEventos([...eventos, novoEvento]);
  };

  const atualizarEvento = (id, eventoAtualizado) => {
    const novosEventos = eventos.map((e) =>
      e.id === id ? { ...e, ...eventoAtualizado } : e
    );
    setEventos(novosEventos);
  };

  const removerEvento = (id) => {
    setEventos(eventos.filter((e) => e.id !== id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home eventos={eventos} />} />
        <Route
          path="/eventos"
          element={<Eventos eventos={eventos} removerEvento={removerEvento} />}
        />
        <Route
          path="/cadastrar"
          element={<CadastrarEvento criarEvento={criarEvento} />}
        />
        <Route
          path="/editar/:id"
          element={<EditarEvento eventos={eventos} atualizarEvento={atualizarEvento} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
