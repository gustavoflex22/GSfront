import { useState } from 'react';
import { GiBigWave } from "react-icons/gi";
import HambClose from '../../assets/menu fechado - bootstrap.svg';
import HambNormal from '../../assets/menu aberto - bootstrap.svg';
import './style.scss';
import { Link } from 'react-router-dom';

export function HeaderMobille() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header>
        <div className="logo" style={{ zIndex: 1 }}>
        <GiBigWave />
        </div>
        <img
          className="menu_icon"
          src={menu ? HambNormal : HambClose}
          alt="Ícone de Menu"
          onClick={() => setMenu(!menu)}
        />

        {menu ? (
          <nav className="nav-bar">
            <div className="nav-list">
              <ul>
                <li className='nav-item'>
                <Link to='/' className="nav-link" onClick={() => setMenu(!menu)}>
                Início
                </Link>
                </li>
                <li className='nav-item'><a href="#sobre" className="nav-link" onClick={() => setMenu(!menu)}>
                Quem somos</a>
                </li>
                <li className='nav-item'><a href="#Produtos" className="nav-link" onClick={() => setMenu(!menu)}>
                Nosso trabalho</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => setMenu(!menu)}>
                  Fale conosco
                </a>
                </li>
                <li className='nav-item'>
                <Link to='/localidade' className="nav-link" onClick={() => setMenu(!menu)}>
                Localização
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/recados' className="nav-link" onClick={() => setMenu(!menu)}>
                  Recados
                </Link>
                </li>
              </ul>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}