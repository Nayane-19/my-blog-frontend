import React, { useState } from 'react';
import './Navigation.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useBlogContext } from '../../contexts/BlogContext';
import { ReactComponent as Avatar } from "../../assets/svg/users.svg";
import { ReactComponent as Logout } from "../../assets/svg/log-out.svg";
import { ReactComponent as Write } from "../../assets/svg/poem.svg";
import { ReactComponent as Close } from "../../assets/svg/x.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow-up-right.svg";
import { logout } from '../../blogApi/apiMethod';

function NavigationMenuMobile({setShowMenuMobile, logoutUser}) {
    const {user} = useBlogContext();

  return (
    <nav className='NavigationMenuMobile'>
        <div className="column box-nav container">
            <Close onClick={() => setShowMenuMobile(false)} className='close'/>
            <ul className='column'>
                <li className='flex'>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className='flex'>
                    <Link to='/artigos'>
                        Artigos
                    </Link>
                </li>
                {!user ?
                <>
                <li className="flex">
                    <Link to='/login'>
                        Entrar
                    </Link>
                </li>
                <li className='flex'>
                    <Link to='/cadastro'>
                        Cadastrar
                    </Link>
                </li>
                </>
                :
                <>
                   <li className='flex'>
                    <Link className='flex' to={`/meus-artigos/${user.id}`}>
                        Ver meus artigos
                    </Link>
                    </li>
                <li className='flex'>
                    <Link className='flex' to='/escrever-artigo'>
                        Escrever um artigo
                    </Link>
                </li>
                <li className='flex' onClick={logoutUser}>
                        Sair
                </li>
                </>
                }
            </ul>
        </div>
    </nav>
  );
}

export default NavigationMenuMobile;