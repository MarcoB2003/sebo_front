import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/constants';

export default function ConsultarLivro() {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchLivros() {
      const response = await axios.get(`${API_URL}/livro`);
      setLivros(response.data);
    }
    fetchLivros();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que quer excluir este livro?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/livro/${id}`);
      setLivros(livros.filter(livro => livro.id !== id));
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      alert('Erro ao excluir livro');
    }
  };

  const handleEdit = (id) => {
    navigate(`/cadastrarlivro/${id}`);
  };

  return (
    <div className="containerC">
      <aside className="sidebar">
        <Link to="/consultarlivro" className="sidebar-btn">Consultar Livro</Link>
        <Link to="/cadastrarlivro" className="sidebar-btn">Cadastrar Livro</Link>
        <Link to="/cadastrarVendas" className="sidebar-btn">Cadastrar Vendas</Link>
        <Link to="/consultarVendas" className="sidebar-btn">Consultar Vendas</Link>
        <Link to="/" className="sidebar-btn">Home</Link>
      </aside>

      <main className="content">
        <div className="table-container">
          <table className="sales-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Sinopse</th>
                <th>Preço</th>
                <th>Lançamento</th>
                <th>Estoque</th>
                <th>Alt</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {livros.map(livro => (
                <tr key={livro.id}>
                  <td>{livro.id}</td>
                  <td>{livro.titulo}</td>
                  <td>{livro.sinopse}</td>
                  <td>{livro.preco}</td>
                  <td>{livro.lancamento}</td>
                  <td>{livro.estoque ? 'Sim' : 'Não'}</td>
                  <td><button className="edit-btn" onClick={() => handleEdit(livro.id)}>✏️</button></td>
                  <td><button className="delete-btn" onClick={() => handleDelete(livro.id)}>🗑️</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
