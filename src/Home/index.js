import './index.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link


const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + items.length) % items.length);
    };

    return (
        <div className="carousel">
            <button className="arrow left" onClick={prevSlide}>&lt;</button>
            <div className="carousel-content">
                {items.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
                    <div key={index} className="carousel-item">
                        {item}
                    </div>
                ))}
            </div>
            <button className="arrow right" onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default function MainPage() {
    return (
        <>
            <img src="foto sessão 1.png" alt="banner" className="banner1" />
            <div className='texto-banner'>
                <div className='sebo'>
                    <h1>Sebo Encanto de Livros</h1>
                </div>
                <h2>Visite nossas lojas físicas e garanta</h2>
                <h2>já seus novos livros.</h2>
                <h2>Avenida Paulista 01310-930</h2>
            </div>
            <div className='nossa-loja'>
                <h1>Visite nossa loja</h1>
                <img src="23_10_capa_blog 1.png" alt="capa" className='local-banner' />
                <p>Estamos localizados no coração da Avenida Paulista, em um dos centros culturais mais vibrantes de São Paulo. Aberta de segunda a sexta, das 10h às 18h, proporcionamos aos nossos clientes um ambiente acolhedor e inspirador, ideal para amantes de livros que buscam uma <br />  experiência de leitura única.</p>
            </div>

            <div className='lista-gibis'>
                <h1 className='tamanho'>Confira nossa lista de Gibis</h1>
                <Carousel 
                    items={[
                        <div className='gibi'>
                            <h1>Batman Vol.01</h1>
                            <img src="batmanvol1.png" alt="batman" />
                            <h1>49.99R$</h1>
                        </div>,
                        <div className='gibi'>
                            <h1>Batman Vol.40</h1>
                            <img src="batmanvol2.png" alt="batman40" />
                            <h1>24.99R$</h1>
                        </div>,
                        <div className='gibi'>
                            <h1>Batman Vol.29</h1>
                            <img src="batmanvol3.png" alt="batman29" />
                            <h1>32.99R$</h1>
                        </div>,
                        <div className='gibi'>
                        <h1>Homem Aranha Vol.52</h1>
                        <img src="homemaranhavol1.png" alt="aranha52" />
                        <h1>22.99R$</h1>
                    </div>,
                    <div className='gibi'>
                    <h1>Homem Aranha Vol.22</h1>
                    <img src="homemaranhavol2.png" alt="aranha22" />
                    <h1>12.99R$</h1>
                </div>,
                <div className='gibi'>
                <h1>Homem Aranha Vol.14</h1>
                <img src="homemaranhavol3.png" alt="aranha14" />
                <h1>36.99R$</h1>
            </div>,


        // Adicione mais itens se necessário
                    ]} 
                />

                <div className='lista-comprados'>
                    <h1 className='tamanho'>Livros mais Comprados do Momento</h1>
                    <Carousel 
                        items={[
                            <div className='comprado'>
                                <h1>FRANKENSTEIN</h1>
                                <img src="frank.png" alt="frank" />
                                <h1>12.99R$</h1>
                            </div>,
                            <div className='comprado'>
                                <h1>DUNA</h1>
                                <img src="duna.png" alt="duna" />
                                <h1>25.99R$</h1>
                            </div>,
                            <div className='comprado'>
                                <h1>PERCY JACKSON</h1>
                                <img src="percy.png" alt="percy" />
                                <h1>16.99R$</h1>
                            </div>,
                            <div className='comprado'>
                            <h1>A GUERRA DOS MUNDOS</h1>
                            <img src="Guerra.png" alt="Guerra" />
                            <h1>17.99R$</h1>
                        </div>,
                        <div className='comprado'>
                        <h1>I HAVE NO MOUTH AND I MUST SCREAM</h1>
                        <img src="Not.png" alt="Not" />
                        <h1>62.99R$</h1>
                    </div>,
                    <div className='comprado'>
                    <h1>CONTOS DO ESPAÇO</h1>
                    <img src="contos.png" alt="Contos" />
                    <h1>27.99R$</h1>
                </div>,
                            // Adicione mais itens se necessário
                        ]} 
                    />
                </div>

                <div className='lista-lancamentos'>
                    <h1 className='tamanho'>Os Últimos Lançamentos</h1>
                    <Carousel 
                        items={[
                            <div className='lancamento'>
                                <h1>A VINGANÇA</h1>
                                <img src="divinos.png" alt="vinganca" />
                                <h1>29.99R$</h1>
                            </div>,
                            <div className='lancamento'>
                                <h1>CULPA</h1>
                                <img src="culpa.png" alt="culpa" />
                                <h1>34.99R$</h1>
                            </div>,
                            <div className='lancamento'>
                                <h1>DIVINOS RIVAIS</h1>
                                <img src="deuses.png" alt="divinos" />
                                <h1>32.99R$</h1>
                            </div>,
                            <div className='lancamento'>
                            <h1>FIVE NIGHTS VOL.03</h1>
                            <img src="fivevol1.png" alt="five3" />
                            <h1>52.99R$</h1>
                        </div>,
                        <div className='lancamento'>
                        <h1>FIVE NIGHTS VOL.01</h1>
                        <img src="fivevol2.png" alt="five1" />
                        <h1>38.99R$</h1>
                    </div>,
                    <div className='lancamento'>
                    <h1>FIVE NIGHTS VOL.02</h1>
                    <img src="fivevol3.png" alt="five2" />
                    <h1>42.99R$</h1>
                </div>,
                            // Adicione mais itens se necessário
                        ]} 
                    />
                </div>
            </div>

            <div className='editoras'>
    <h1 className='tamanho2'>As Melhores Editoras</h1>
    <div className='editoras-lista'>
        <img src="EDITORA 1.png" alt="editora1" />
        <img src="EDITORA 2.png" alt="editora2" />
        <img src="EDITORA 3.png" alt="editora3" />
        <img src="EDITORA 4.png" alt="editora4" />
    </div>
    <div className='editoras-lista'>
        <img src="EDITORA 5.png" alt="editora5" />
        <img src="EDITORA 6.png" alt="editora6" />
        <img src="EDITORA 7.png" alt="editora7" />
        <img src="EDITORA 8.png" alt="editora8" />
    </div>
    <Link to="/editoras">
        <button className='confira'>Confira as editoras!</button>
    </Link>
</div>

<footer>
    <div>
        <img src="logo.svg" alt="logo" className='logo' />
        <h1> © 2024 BookStore. Todos os direitos reservados.</h1>
    </div>
</footer>

        </>
    );
}