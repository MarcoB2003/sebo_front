import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Importando o App com as rotas

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App /> {/* Renderizando o App com o Header e as Rotas */}
    </Router>
  </React.StrictMode>
);
