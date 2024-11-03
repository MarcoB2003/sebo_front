import { useState } from 'react';
import axios from 'axios';
import './index.scss';

export default function CadastrarLivro() {
  const [titulo, setTitulo] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [preco, setPreco] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [estoque, setEstoque] = useState(false);

  const handleCadastro = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5001/livro', { titulo, sinopse, preco, lancamento, estoque });
      alert('Livro cadastrado com sucesso');
      setTitulo(''); setSinopse(''); setPreco(''); setLancamento(''); setEstoque(false);
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar livro');
    }
  };

  return (
    <div className="container2">
      <form className="form-cadastro" onSubmit={handleCadastro}>
        <h2>Cadastrar Livro</h2>
        <input type="text" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} required />
        <textarea placeholder="Sinopse" value={sinopse} onChange={e => setSinopse(e.target.value)} required></textarea>
        <input type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} required />
        <input type="date" placeholder="Lançamento" value={lancamento} onChange={e => setLancamento(e.target.value)} required />
        <label>
          <input type="checkbox" checked={estoque} onChange={e => setEstoque(e.target.checked)} />
          Em Estoque
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
