import './index.scss'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container3">
      <aside className="sidebar">
        <Link to="/consultar" className="sidebar-btn">Consultar Livro</Link>
        <Link to="/cadastar" className="sidebar-btn">Cadastrar Livro</Link>
        <Link to="/home" className="sidebar-btn">Home</Link>
      </aside>
      <main className="content">
        <div className="logo-container">
          {/* Aqui pode colocar a imagem da logo */}
        </div>
      </main>
    </div>
  );
}
