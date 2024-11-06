import { useState } from 'react';
import axios from 'axios';
import './index.scss';
import { Link } from 'react-router-dom';

export default function CadastrarVendas() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [dataVenda, setDataVenda] = useState('');
  const [nomeLivro, setNomeLivro] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [valorVenda, setValorVenda] = useState('');

  const handleCadastroVenda = async (event) => {
    event.preventDefault();
    const vendaData = { nomeCliente, dataVenda, nomeLivro, quantidade, valorVenda };
    console.log('Dados a serem enviados:', vendaData);
    try {
      await axios.post('http://localhost:5001/venda', vendaData);
      alert('Venda cadastrada com sucesso');
      setNomeCliente(''); setDataVenda(''); setNomeLivro(''); setQuantidade(0); setValorVenda('');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar venda');
    }
  };

  return (
    <div className="containerB">
      <aside className="sidebar">
        <Link to="/consultarlivro" className="sidebar-btn">Consultar Livro</Link>
        <Link to="/cadastrarlivro" className="sidebar-btn">Cadastrar Livro</Link>
        <Link to="/cadastrarvendas" className="sidebar-btn">Cadastrar Vendas</Link>
        <Link to="/consultarvendas" className="sidebar-btn">Consultar Vendas</Link>
        <Link to="/" className="sidebar-btn">Home</Link>
      </aside>

      <main className="content">
        <form className="form-cadastro" onSubmit={handleCadastroVenda}>
          <h2>Cadastrar Venda</h2>
          <input type="text" placeholder="Nome do Cliente" value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} required />
          <input type="date" placeholder="Data da Venda" value={dataVenda} onChange={e => setDataVenda(e.target.value)} required />
          <input type="text" placeholder="Nome do Livro" value={nomeLivro} onChange={e => setNomeLivro(e.target.value)} required />
          <input type="number" placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} min="1" required />
          <input type="number" placeholder="Valor da Venda" value={valorVenda} onChange={e => setValorVenda(e.target.value)} required />
          <button type="submit" className="submit-btn">Cadastrar Venda</button>
        </form>
      </main>
    </div>
  );
}
