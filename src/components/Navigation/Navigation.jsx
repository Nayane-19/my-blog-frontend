import React, { useState } from 'react';
import './Navigation.scss'
import Logo from '../../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useBlogContext } from '../../contexts/BlogContext';
import { ReactComponent as Avatar } from "../../assets/svg/users.svg";
import { ReactComponent as Logout } from "../../assets/svg/log-out.svg";
import { ReactComponent as Write } from "../../assets/svg/poem.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow-up-right.svg";
import { logout } from '../../blogApi/apiMethod';

function Navigation() {
    const {user, setUserInfo} = useBlogContext();
    const [showDrop, setShowDrop] = useState(false);
    const navigate = useNavigate();

    const logoutUser = () => {
        logout();
        setUserInfo();
        navigate('/')
    }

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
                {!user ?
                <li className="flex login">
                    <Link to='/login'>
                        Entrar
                    </Link>
                    <span>ou</span>
                    <Link to='/cadastro'>
                        Cadastrar
                    </Link>
                </li>
                :
                <li className="flex user" onClick={() => setShowDrop(!showDrop)}>
                    <Avatar className='avatar'/>
                    <span>
                        {user.username}
                    </span>
                    {showDrop &&
                    <div className='column drop'>
                        <Link className='flex' to={`/meus-artigos/${user.id}`}>
                            <Arrow/>
                            Ver meus artigos
                        </Link>
                        <Link className='flex' to='/escrever-artigo'>
                            <Write/>
                            Escrever um artigo
                        </Link>
                        <button className='flex' onClick={logoutUser}>
                            <Logout/>
                            Sair
                        </button>
                    </div>
                    }
                </li>
                }
            </ul>
        </div>
    </nav>
  );
}

export default Navigation;