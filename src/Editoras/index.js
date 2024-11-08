// src/Editoras.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Editoras = () => {
  const editoras = [
    {
      titulo: 'Editoras com melhor Atendimento',
      descricao: 'Descrição da Editora 1',
      imagens: [
        { src: 'edit13.png', descricao: 'EDITORIAL ALTA BOOKS' },
        { src: 'edit17.png', descricao: 'EDITORA DARKSIDE BOOKS' },
        { src: 'edit12.png', descricao: 'EDITORA GLOBO LIVROS' },
      ],
    },
    {
      titulo: 'Editoras com maiores vendas do Mês',
      descricao: 'Descrição da Editora 2',
      imagens: [
        { src: 'edit16.png', descricao: 'EDITORA INTRÍNSECA' },
        { src: 'edit14.png', descricao: 'EDITORA ROCCO' },
        { src: 'edit15.png', descricao: 'EDITORA SEXTANTE' },
      ],
    },
    {
      titulo: 'Editoras recomendadas por Criticos',
      descricao: 'Descrição da Editora 3',
      imagens: [
        { src: 'edit11.png', descricao: 'EDITORA HARPER COLLINS' },
        { src: 'edit19.png', descricao: 'EDITORA THE GIFT BOX' },
        { src: 'edit20.png', descricao: 'EDITORA VALENTINA' },
      ],
    },
  ];

  return (
    <div className="editoras-page"> 
      {/* Banner com título */}
      <div className="banner-editoras"> 
        <h1>RECOMENDAÇÃO DE EDITORAS</h1>
      </div>

      <div className="editoras-carrossel-tela">
        <h2>DESCUBRA AS MELHORES EDITORAS</h2>
        <Slider {...settings}>
          {editoras.map((editora, index) => (
            <div key={index} className="editora-tela">
              <h3>{editora.titulo}</h3>
              <div className="imagens-centralizadas">
                {editora.imagens.map((imagem, i) => (
                  <div key={i} className="imagem-e-descricao">
                    <img src={imagem.src} alt={`${editora.titulo} imagem ${i + 1}`} className="imagem-compacta" />
                    <p className="descricao-imagem">{imagem.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Editoras;
