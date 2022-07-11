import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonLink.scss'


function ButtonLink(props) {


  return (
    <Link to={props.link} className={`ButtonLink flex ${props.full ? 'full' : 'light'}`}>
        {props.children}
        {props.svg &&
        props.svg
        }
    </Link>
  );
}

export default ButtonLink;