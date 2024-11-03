import { useState } from 'react';
import axios from 'axios';
import './index.scss';

export default function CadastrarVendas() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [dataVenda, setDataVenda] = useState('');
  const [nomeLivro, setNomeLivro] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [valorVenda, setValorVenda] = useState('');

  const handleCadastroVenda = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5001/venda', { nomeCliente, dataVenda, nomeLivro, quantidade, valorVenda });
      alert('Venda cadastrada com sucesso');
      setNomeCliente(''); setDataVenda(''); setNomeLivro(''); setQuantidade(1); setValorVenda('');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar venda');
    }
  };

  return (
    <div className="container2">
      <form className="form-cadastro" onSubmit={handleCadastroVenda}>
        <h2>Cadastrar Venda</h2>
        <input type="text" placeholder="Nome do Cliente" value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} required />
        <input type="date" placeholder="Data da Venda" value={dataVenda} onChange={e => setDataVenda(e.target.value)} required />
        <input type="text" placeholder="Nome do Livro" value={nomeLivro} onChange={e => setNomeLivro(e.target.value)} required />
        <input type="number" placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} min="1" required />
        <input type="number" placeholder="Valor da Venda" value={valorVenda} onChange={e => setValorVenda(e.target.value)} required />
        <button type="submit">Cadastrar Venda</button>
      </form>
    </div>
  );
}
