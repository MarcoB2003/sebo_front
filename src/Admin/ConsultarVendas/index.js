import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.scss';

export default function ConsultarVendas() {
    const [vendas, setVendas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchVendas() {
            try {
                const response = await axios.get('http://localhost:5001/vendas');
                setVendas(response.data);
            } catch (err) {
                setError('Erro ao carregar vendas');
            }
        }
        fetchVendas();
    }, []);

    const handleDeleteVenda = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/vendas/${id}`);
            setVendas(vendas.filter(venda => venda.id !== id));
        } catch (error) {
            setError('Erro ao deletar venda');
        }
    };

    return (
        <div className="container2">
            <aside className="sidebar">
                <Link to="/consultarlivro" className="sidebar-btn">Consultar Livro</Link>
                <Link to="/cadastrarlivro" className="sidebar-btn">Cadastrar Livro</Link>
                <Link to="/cadastrarVendas" className="sidebar-btn">Cadastrar Vendas</Link>
                <Link to="/consultarVendas" className="sidebar-btn">Consultar Vendas</Link>
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
                                <th>Nome Cliente</th>
                                <th>Data da Venda</th>
                                <th>ID Compra</th>
                                <th>Preço (R$)</th>
                                <th>Quantidade</th>
                                <th>ID Livro</th>
                                <th>Editar</th>
                                <th>Deletar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendas.map(venda => (
                                <tr key={venda.id}>
                                    <td>{venda.id}</td>
                                    <td>{venda.nomeCliente}</td>
                                    <td>{venda.dataVenda}</td>
                                    <td>{venda.idCompra}</td>
                                    <td>{venda.preco}</td>
                                    <td>{venda.quantidade}</td>
                                    <td>{venda.idLivro}</td>
                                    <td><button className="edit-btn">✏️</button></td>
                                    <td><button className="delete-btn" onClick={() => handleDeleteVenda(venda.id)}>🗑️</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
