import React, { useState } from 'react';
import './index.scss'; // Import the stylesheet.

export default function Contato() {
  // Estado para controlar a exibição da mensagem de confirmação
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página
    setIsSubmitted(true); // Define o estado para mostrar a mensagem
    setTimeout(() => {
      setIsSubmitted(false); // Oculta a mensagem após 3 segundos
    }, 3000);
  };

  return (
    <div className="contato-page">
      <div className="contato-banner">
        <h1>FALE CONOSCO</h1>
        <p>Preencha o formulário abaixo e nos envie uma mensagem via Email.</p>
      </div>
      <form className="contato-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            Nome completo
            <input type="text" name="nome" required />
          </label>
          <label>
            E-mail
            <input type="email" name="email" required />
          </label>
        </div>
        <label>
          Mensagem
          <textarea name="mensagem" rows="8" required />
        </label>
        <button type="submit">Enviar Mensagem</button>
        {/* Condicional para exibir a mensagem de confirmação */}
        {isSubmitted && <p className="confirmation-message">Mensagem Enviada</p>}
      </form>
    </div>
  );
}
