import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Importando useParams e useNavigate
import './index.scss';

export default function CadastrarLivro() {
  const [titulo, setTitulo] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [preco, setPreco] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [estoque, setEstoque] = useState(false);
  const { id } = useParams(); // Obtém o parâmetro id da URL
  const navigate = useNavigate(); // Para redirecionar após a alteração

  // Quando a URL tiver um id (ou seja, for edição), buscar os dados
  useEffect(() => {
    if (id) {
      // Se existir o id, buscar os dados do livro
      async function fetchLivro() {
        try {
          const response = await axios.get(`http://localhost:5001/livro/${id}`);
          const livro = response.data;
          setTitulo(livro.titulo);
          setSinopse(livro.sinopse);
          setPreco(livro.preco);
          setLancamento(livro.lancamento);
          setEstoque(livro.estoque);
        } catch (error) {
          console.error('Erro ao buscar livro:', error);
          alert('Erro ao buscar livro');
        }
      }
      fetchLivro();
    }
  }, [id]); // A dependência é o id

  const handleCadastro = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        // Se houver id, é uma atualização de livro
        await axios.put(`http://localhost:5001/livro/${id}`, {
          titulo,
          sinopse,
          preco,
          lancamento,
          estoque,
        });
        alert('Livro atualizado com sucesso');
      } else {
        // Caso contrário, é um cadastro novo
        await axios.post('http://localhost:5001/livro', {
          titulo,
          sinopse,
          preco,
          lancamento,
          estoque,
        });
        alert('Livro cadastrado com sucesso');
      }
      // Limpar campos após cadastro ou atualização
      setTitulo('');
      setSinopse('');
      setPreco('');
      setLancamento('');
      setEstoque(false);
      // Redireciona de volta para a página de consulta de livros
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
