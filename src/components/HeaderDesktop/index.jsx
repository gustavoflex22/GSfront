import { GiBigWave } from "react-icons/gi";
import { Link } from "react-router-dom";
import './style.scss';

export const HeaderDesktop = () => {
  return (
  <>
    <div className='container'>
    <header>
      <Link to='/' className="logo">
      <GiBigWave/>
      <p>AquaClean</p>
      </Link>
      <ul className='header-ul'>
      <Link to='/' className="recados">Início</Link>
      <li><a href="#pai_quemsomos">Quem somos</a></li>
      <li><a href="#">Nosso trabalho</a></li>
      <li><a href="#">Fale conosco</a></li>
      <Link to='/localidade' className="recados">Localidades</Link>
      <Link to='/recados' className="recados">Recados</Link>
      </ul>
    </header>
    </div>
</>
  )
}