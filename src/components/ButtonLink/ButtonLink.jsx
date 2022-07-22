import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonLink.scss'


function ButtonLink(props) {


  return (
    props.link ?
    <Link to={props.link} className={`ButtonLink flex ${props.full ? 'full' : 'light'} ${props.className}`}>
        {props.children}
        {props.svg &&
        props.svg
        }
    </Link>
    :
    <button onClick={props.onClick} className={`ButtonLink flex ${props.full ? 'full' : 'light'} ${props.className}`}>
        {props.children}
        {props.svg &&
        props.svg
        }
    </button>
  );
}

export default ButtonLink;