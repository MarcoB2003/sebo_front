// src/components/CadastrarVendas/index.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { API_URL } from '../../api/constants';

export default function CadastrarVendas() {
    const [nomeCliente, setNomeCliente] = useState('');
    const [dataVenda, setDataVenda] = useState('');
    const [nomeLivro, setNomeLivro] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [valorVenda, setValorVenda] = useState('');
    const [vendaId, setVendaId] = useState(null);
    const [livros, setLivros] = useState([]); // Estado para armazenar os livros disponíveis
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Carrega os livros disponíveis
        async function fetchLivros() {
            try {
                const response = await axios.get(`${API_URL}/livro`);
                setLivros(response.data);
            } catch (error) {
                console.error("Erro ao buscar livros:", error);
            }
        }

        fetchLivros();

        // Carrega dados da venda se estiver em modo de edição
        if (location.state && location.state.venda) {
            const { venda } = location.state;
            setNomeCliente(venda.nome_cliente);
            setDataVenda(venda.data_venda.slice(0, 10)); // Ajusta a data para formato 'YYYY-MM-DD'
            setNomeLivro(venda.nome_livro);
            setQuantidade(venda.quantidade);
            setValorVenda(venda.valor_venda);
            setVendaId(venda.id);
        }
    }, [location.state]);

    const handleCadastroVenda = async (event) => {
        event.preventDefault();
        const vendaData = { nomeCliente, dataVenda, nomeLivro, quantidade, valorVenda };
        console.log('Dados a serem enviados:', vendaData);

        try {
            if (vendaId) {
                // Atualizar venda existente
                await axios.put(`${API_URL}/venda/${vendaId}`, vendaData);
                alert('Venda atualizada com sucesso');
            } else {
                // Criar nova venda
                await axios.post(`${API_URL}/venda`, vendaData);
                alert('Venda cadastrada com sucesso');
            }

            // Resetar campos
            setNomeCliente('');
            setDataVenda('');
            setNomeLivro('');
            setQuantidade(1);
            setValorVenda('');
            setVendaId(null);

            // Navegar de volta para ConsultarVendas
            navigate('/consultarvendas');
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar/atualizar venda');
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
                    <h2>{vendaId ? 'Editar Venda' : 'Cadastrar Venda'}</h2>
                    <input
                        type="text"
                        placeholder="Nome do Cliente"
                        value={nomeCliente}
                        onChange={e => setNomeCliente(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        placeholder="Data da Venda"
                        value={dataVenda}
                        onChange={e => setDataVenda(e.target.value)}
                        required
                    />
                    <select
                        value={nomeLivro}
                        onChange={(e) => setNomeLivro(e.target.value)}
                        required
                    >
                        <option value="" disabled>Selecione um Livro</option>
                        {livros.map((livro) => (
                            <option key={livro.id} value={livro.titulo}>
                                {livro.titulo}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                        min="1"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Valor da Venda"
                        value={valorVenda}
                        onChange={e => setValorVenda(e.target.value)}
                        step="0.01"
                        required
                    />
                    <button type="submit" className="submit-btn">
                        {vendaId ? 'Salvar Alterações' : 'Cadastrar Venda'}
                    </button>
                </form>
            </main>
        </div>
    );
}
