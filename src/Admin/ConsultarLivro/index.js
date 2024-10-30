import { Link } from 'react-router-dom';
import './index.scss'
import React from 'react';


export default function ConsultarLivro() {
  return (
    <div className="containerConsultar">
      <aside className="sidebar">
        <Link to="/consultar" className="sidebar-btn">Consultar Livro</Link>
        <Link to="/cadastar" className="sidebar-btn">Cadastrar Livro</Link>
        <Link to="/home" className="sidebar-btn">Home</Link>



      </aside>
      <main className="content">

        <div className="search-bar">
          <input type="text" placeholder="Pesquise Aqui" />
          <button className="search-btn">Consultar Livro</button>
        </div>
        <table className="book-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Autor</th>
              <th>Editora</th>
              <th>Data</th>
              <th>Disponível</th>
              <th>Preço</th>
              <th>Alt</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hábitos</td>
              <td>Pablo</td>
              <td>Escobar</td>
              <td>24/10/2020</td>
              <td>Sim</td>
              <td>R$20,00</td>
              <td><button className="edit-btn">✏️</button></td>
              <td><button className="delete-btn">🗑️</button></td>
            </tr>
            {/* Adicione mais linhas conforme necessário */}
          </tbody>
        </table>
      </main>
    </div>
  );
}
