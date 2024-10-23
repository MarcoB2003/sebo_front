import './header.css';

export function Header() {
  return (
    <header>
        <img src="logo.svg" alt="logo" className='logo'/>
        <div className='header-a'>
        <a href="#">Principais Autores</a>
        <a href="#">Fale conosco!</a>
        <a href="#">Dicas de livros</a>
        <a href="#">Sobre nós</a>
        </div>
        <a href="#">Admin</a>
    </header>
  );
}