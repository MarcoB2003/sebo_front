import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';

export default function ConsultarLivro() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      const response = await axios.get('http://localhost:5001/livro');
      setLivros(response.data);
    }
    fetchLivros();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/livro/${id}`);
    setLivros(livros.filter(livro => livro.id !== id));
  };

  return (
    <div className="container2">
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
                <td><button className="edit-btn">✏️</button></td>
                <td><button className="delete-btn" onClick={() => handleDelete(livro.id)}>🗑️</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
