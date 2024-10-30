
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'


export default function CadastrarLivro() {
    return (
        <div className="container2">
            <aside className="sidebar">
            <Link to="/consultar" className="sidebar-btn">Consultar Livro</Link>
            <Link to="/cadastar" className="sidebar-btn">Cadastrar Livro</Link>
              <Link to="/home" className="sidebar-btn">Home</Link>
                
            </aside>
            <main className="content">

                <div className="form-container">
                    <h2>Cadastrar Livro</h2>

                    <form className="form">
                        <div className="form-group">
                            <label>Nome:</label>
                            <input type="text" />
                            <label>Data:</label>
                            <input type="date" />
                        </div>
                        <div className="form-group">
                            <label>Editora:</label>
                            <input type="text" />
                            <label>Autor:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group full-width">
                            <label>Descrição:</label>
                            <textarea rows="4"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Disponível:</label>
                            <select>
                                <option>Sim</option>
                                <option>Não</option>
                            </select>
                            <label>Valor:</label>
                            <input type="text" />
                            <label>Imagem:</label>
                            <input type="file" />
                        </div>
                        <button className="submit-btn">Cadastrar</button>
                    </form>
                </div>
            </main>
        </div>
    );
}
