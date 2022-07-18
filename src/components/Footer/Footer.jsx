import React from 'react';
import './Footer.scss';
import Retangle from '../../assets/img/retangle.svg'
import Form from '../Form/Form';
import {ReactComponent as Linkedin} from '../../assets/svg/in.svg';
import {ReactComponent as Mail} from '../../assets/svg/mail.svg';
import {ReactComponent as Github} from '../../assets/svg/github.svg';

function Footer() {
  return (
    <footer className='Footer' style={{backgroundImage: `url(${Retangle})`}}>
        <div className="box flex container">
          <div className='column box-social'>
             <p>Contato</p>
             <a className="flex" href="https://www.linkedin.com/in/nayane-menezes-dev-eng/">
               <div className="svg">
               <Linkedin/>
               </div>
                <span>
                  Nayane Menezes
                </span>
             </a>
             <a className="flex" href="https://github.com/Nayane-19">
                <div className="svg">
                <Github/>
                </div>
                <span>
                  Nayane-19
                </span>
             </a>
             <div className="flex">
                <div className="svg">
                <Mail/>
                </div>
                <span>
                  nayanemenezes2011@gmail.com
                </span>
             </div>
          </div>
          <Form title='Se inscreva na nossa Newsletter' button='Enviar' newsLetter={true}/>
        </div>
    </footer>
  );
}

export default Footer;