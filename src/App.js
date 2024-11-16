// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Home';
import { Header } from './components';
import Contato from './Contato'; 
import PrincipaisAutores from './PrincipaisAutores';
import Editoras from './Editoras';
import Sobre from './Sobre';
import CadastrarLivro from './Admin/CadastrarLivro'; 
import ConsultarLivro from './Admin/ConsultarLivro'; 
import Login from './Login'; // Importando a página de Login
import Home from './components/Home';
import CadastrarFilme from './components/CadastrarFilme';
import CadastrarVendas from './Admin/CadastrarVendas';

import ConsultarVendas from './Admin/ConsultarVendas';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contato" element={<Contato />} /> 
        <Route path="/principaisautores" element={<PrincipaisAutores />} />
        <Route path="/editoras" element={<Editoras />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastrarlivro" element={<CadastrarLivro />} />
        <Route path="/cadastrarlivro/:id" element={<CadastrarLivro />} />
        <Route path="/consultarlivro" element={<ConsultarLivro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrarFilme" element={<CadastrarFilme />} />
        <Route path="/cadastrarVendas" element={<CadastrarVendas />} />
        <Route path="/consultarVendas" element={<ConsultarVendas />} />


      </Routes>
    </>
  );
}

export default App;
