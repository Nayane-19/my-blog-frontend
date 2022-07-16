import React from 'react';
import './Navigation.scss'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='Navigation'>
        <div className="flex box-nav container">
            <Link to='/'>
                <img src={Logo} alt="" />
            </Link>
            <ul className='flex'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/artigos'>
                        Artigos
                    </Link>
                </li>
                <li className="flex login">
                    <Link to='/login'>
                        Entrar
                    </Link>
                    <span>ou</span>
                    <Link to='/cadastro'>
                        Cadastrar
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navigation;