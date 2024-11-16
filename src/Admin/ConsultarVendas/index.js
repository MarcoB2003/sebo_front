import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';

import { API_URL } from '../../api/constants';

export default function ConsultarVendas() {
  const [vendas, setVendas] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchVendas() {
      try {
        const response = await axios.get(`${API_URL}/venda`);
        setVendas(response.data);
      } catch (err) {
        setError('Erro ao carregar vendas');
      }
    }
    fetchVendas();
  }, []);

  const handleDeleteVenda = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que quer excluir esta venda?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/venda/${id}`);
      setVendas(vendas.filter(venda => venda.id !== id));
    } catch (error) {
      setError('Erro ao deletar venda');
    }
  };

  const handleEditVenda = (venda) => {
    navigate('/cadastrarvendas', { state: { venda } });
  };

  return (
    <div className="consultar-vendas">
      <aside className="sidebar">
        <Link to="/consultarlivro" className="sidebar-btn">Consultar Livro</Link>
        <Link to="/cadastrarlivro" className="sidebar-btn">Cadastrar Livro</Link>
        <Link to="/cadastrarvendas" className="sidebar-btn">Cadastrar Vendas</Link>
        <Link to="/consultarvendas" className="sidebar-btn">Consultar Vendas</Link>
        <Link to="/" className="sidebar-btn">Home</Link>
      </aside>

      <main className="content">
        <h1>Consultar Vendas</h1>
        {error && <p className="error-message">{error}</p>}

        <div className="table-container">
          <table className="sales-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome do Cliente</th>
                <th>Data da Venda</th>
                <th>Nome do Livro</th>
                <th>Quantidade</th>
                <th>Valor da Venda (R$)</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {vendas.map(venda => (
                <tr key={venda.id}>
                  <td>{venda.id}</td>
                  <td>{venda.nome_cliente}</td>
                  <td>{new Date(venda.data_venda).toLocaleDateString('pt-BR')}</td>
                  <td>{venda.nome_livro}</td>
                  <td>{venda.quantidade}</td>
                  <td>{venda.valor_venda.toFixed(2)}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditVenda(venda)}>✏️</button>
                  </td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDeleteVenda(venda.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
