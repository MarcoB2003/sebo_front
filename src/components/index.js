// src/components/index.js
import './index.scss';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom

export function Header() {
  return (
    <header>
        <img src="logo.svg" alt="logo" className='logo'/>
        <div className='header-a'>
          {/* Substituindo <a> por <Link> */}
          <Link to="/principaisautores">Principais Autores</Link>
          <Link to="/contato">Fale conosco</Link>
          <Link to="/editoras">Editoras</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/cadastrarlivro">Cadastrar Livro</Link> 
          <Link to="/consultarlivro">Consultar Livro</Link>
        </div>
        <Link to="/login">Admin</Link> {/* Atualizado para redirecionar para Login */}
    </header>
  );
}
