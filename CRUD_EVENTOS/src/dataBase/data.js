// src/data.js
let eventos = [
  { 
    id: 1, 
    nome: 'Tech Conference 2025', 
    descricao: 'A conferência de tecnologia mais inovadora do ano, com palestras de grandes nomes da indústria.', 
    data: '2025-05-01', 
    local: 'Centro de Convenções, São Paulo', 
    horario: '09:00'
  },
  { 
    id: 2, 
    nome: 'Hackathon 2025', 
    descricao: 'Evento de programação intensivo para desenvolvedores, com premiação para as melhores soluções.', 
    data: '2025-06-15', 
    local: 'Campus de Inovação, Campinas', 
    horario: '08:00'
  },
  { 
    id: 3, 
    nome: 'ExpoTech 2025', 
    descricao: 'Exposição de tecnologias emergentes e startups inovadoras.', 
    data: '2025-07-10', 
    local: 'Expo Center Norte, São Paulo', 
    horario: '10:00'
  }
];

const criarEvento = (evento) => {
  evento.id = eventos.length + 1; // Atribuindo um ID automático
  eventos.push(evento);
};

const lerEventos = () => eventos;

const atualizarEvento = (id, eventoAtualizado) => {
  const index = eventos.findIndex(evento => evento.id === id);
  if (index !== -1) {
    eventos[index] = { ...eventos[index], ...eventoAtualizado };
  }
};

const removerEvento = (id) => {
  eventos = eventos.filter(evento => evento.id !== id);
};

export default { criarEvento, lerEventos, atualizarEvento, removerEvento };
