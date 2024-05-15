import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './lancamentos.css';
import { Form, Lancamentos } from './components/lancamentos';
import reportWebVitals from './reportWebVitals';

const lancamentosMock = [
  { descricao: 'Conta de Luz', vencimento: '10/05/2024', valor: 100.00 },
  { descricao: 'Conta de Água', vencimento: '15/05/2024', valor: 80.00 },
  { descricao: 'Conta de Internet', vencimento: '16/05/2024', valor: 90.00 },
];

const handleSubmit = (descricao, valor, vencimento) => {
  console.log('Descrição:', descricao);
  console.log('Valor:', valor);
  console.log('Vencimento:', vencimento);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form onSubmit={handleSubmit} />
    <Lancamentos lancamentos={lancamentosMock} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();