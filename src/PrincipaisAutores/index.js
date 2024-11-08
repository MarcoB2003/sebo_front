import React from 'react';
import './index.scss'; // Arquivo CSS para a estilização da página.

export default function PrincipaisAutores() {
  // Lista de autores
  const autores = [
    'Agatha Christie', 'Albert Camus', 'Anne Frank', 'Bernard Cornwell', 'Brené Brown', 'Carina Rissi',
    'Carpinejar', 'Chico Xavier', 'Dale Carnegie', 'Dan Brown', 'Dav Pilkey', 'E.L James', 
    'Elle Kennedy', 'Edgar Allan', 'Hajime Isayama', 'Flávio Augusto da Silva', 'Fernando Pessoa', 
    'Franz Kafka', 'Gustavo Cerbasi', 'Geoger Orwell', 'John Boyne', 'José Saramago', 'Jane Austen', 
    'Julia Quinn', 'Jeff Kinney', 'Koyoharu Gotouge', 'Kohei Horikoshi', 'Kiera Cass', 
    'Lima Barreto', 'Lionel Shriver', 'Paulo Viera', 'Pedro Bandeira', 'Paulo Coelho', 
    'Rupi Kaur', 'Robert Greene', 'Roberto Belli', 'Rubem Alves', 'Stan Lee', 'Sun Tzu', 
    'Oscar Wilde', 'Olavo de Carvalho', 'Tsugumi Ohba', 'Valter Hugo', 'William Shakespeare', 
    'Zibia Gasparetto'
  ];

  return (
    <div className="autores-page">
      {/* Banner com título */}
      <div className="banner">
        <h1>PRINCIPAIS AUTORES</h1>
      </div>

      {/* Seção de Autores mais Vendidos */}
      <div className="autores-conteudo">
        <h2>Autores com livros mais Vendidos</h2>
        <h3>Conheça os Autores mais famosos!</h3>
        <div className="autores-lista">
          {autores.map((autor, index) => (
            <a href="https://pt.wikipedia.org/wiki/Categoria:Escritores" key={index} className="autor-link">
              {autor}{index < autores.length - 1 ? ' | ' : ''}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
