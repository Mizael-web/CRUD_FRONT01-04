// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; // Importação do componente Home
import Eventos from "./pages/Eventos/Eventos"; // Importação do componente Eventos
import CadastrarEvento from "./pages/CadastrarEvento/CadastrarEvento"; // Importação do componente CadastrarEvento
import EditarEvento from "./pages/EditarEvento/EditarEvento"; // Importação do componente EditarEvento
import Header from "./components/Header/Header"; // Importação do Header
import Footer from "./components/Footer/Footer"; // Importação do Footer
import "./App.css"; // Importação do CSS global

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/cadastrar" element={<CadastrarEvento />} />
        <Route path="/editar/:id" element={<EditarEvento />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
