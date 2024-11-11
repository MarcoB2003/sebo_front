import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../api/constants';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
        
        try {
            const response = await axios.post(`${API_URL}/login`, { email, senha });
            if (response.status === 200) {
                navigate('/cadastrarLivro');
            }
        } catch (error) {
            alert('Usuário ou senha incorretos');
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-title">Login de Administrador</h2>
                <input 
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input 
                    className="login-input"
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    required
                />
                <button className="login-button" type="submit">Entrar</button>
            </form>
        </div>
    );
}
