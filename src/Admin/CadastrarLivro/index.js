import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './index.scss';
import { API_URL } from '../../api/constants';

export default function CadastrarLivro() {
  const [titulo, setTitulo] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [preco, setPreco] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [estoque, setEstoque] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      async function fetchLivro() {
        try {
          const response = await axios.get(`${API_URL}/livro/${id}`);
          const livro = response.data;
          setTitulo(livro.titulo);
          setSinopse(livro.sinopse);
          setPreco(livro.preco);
          setLancamento(livro.lancamento);
          setEstoque(livro.estoque);
        } catch (error) {
          console.error('Erro ao buscar livro:', error);
          // Alert removido
        }
      }
      fetchLivro();
    }
  }, [id]);

  const handleCadastro = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        await axios.put(`${API_URL}/livro/${id}`, {
          titulo,
          sinopse,
          preco,
          lancamento,
          estoque,
        });
        alert('Livro atualizado com sucesso');
      } else {
        await axios.post(`${API_URL}/livro`, {
          titulo,
          sinopse,
          preco,
          lancamento,
          estoque,
        });
        alert('Livro cadastrado com sucesso');
      }
      setTitulo('');
      setSinopse('');
      setPreco('');
      setLancamento('');
      setEstoque(false);
      navigate('/consultarlivro');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar/atualizar livro');
    }
  };

  return (
    <div className="containerA">
      <aside className="sidebar">
        <Link to="/consultarlivro" className="sidebar-btn">Consultar Livro</Link>
        <Link to="/cadastrarlivro" className="sidebar-btn">Cadastrar Livro</Link>
        <Link to="/cadastrarVendas" className="sidebar-btn">Cadastrar Vendas</Link>
        <Link to="/consultarVendas" className="sidebar-btn">Consultar Vendas</Link>
        <Link to="/" className="sidebar-btn">Home</Link>
      </aside>

      <main className="content">
        <form className="form-cadastro" onSubmit={handleCadastro}>
          <h2>{id ? 'Alterar Livro' : 'Cadastrar Livro'}</h2>
          <input type="text" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} required />
          <textarea placeholder="Sinopse" value={sinopse} onChange={e => setSinopse(e.target.value)} required></textarea>
          <input type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} required />
          <input type="date" placeholder="Lançamento" value={lancamento} onChange={e => setLancamento(e.target.value)} required />
          <label>
            <input type="checkbox" checked={estoque} onChange={e => setEstoque(e.target.checked)} />
            Em Estoque
          </label>
          <button type="submit" className="submit-btn">{id ? 'Atualizar' : 'Cadastrar'}</button>
        </form>
      </main>
    </div>
  );
}
