import React, { useRef, useState } from 'react';
import './Form.scss'
import InputMask from 'react-text-mask'
import Input from '../Input/Input';
import { login, register, setNewsletter } from '../../blogApi/apiMethod';
import { useBlogContext } from '../../contexts/BlogContext';
import { useNavigate } from 'react-router-dom';




function Form(props) {   
  const [userData, setUserData] = useState({});
  const [showErros, setShowErros] = useState(false);
  const {setUserInfo} = useBlogContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowErros(true)

    if(props.signup){
      register(userData).then(function(){
        setUserInfo()
        navigate('/')
      });
      e.target.reset();
    }

    if(props.login){
      login(userData).then(function(){
        setUserInfo()
        navigate('/')
      });
      e.target.reset();
    }

    if(props.newsLetter){
      setNewsletter(userData);
      e.target.reset();
    }
  }

  return (
    <form className='Form column' action="" onSubmit={handleSubmit}>
        <p>{props.title}</p>
        {props.login ?
        <>
           <Input showerros={showErros} type="email" placeholder='E-mail' id='identifier' onChange={handleChange}/>
           <Input showerros={showErros} type="password" placeholder='Senha' onChange={handleChange} id='password'/>
           <button type='submit'>{props.button}</button>
        </>
        :
          props.signup ?
          <>
        <Input showerros={showErros} type="text" placeholder='Nome' onChange={handleChange} id='username'/>
        <Input showerros={showErros} type="email" placeholder='E-mail' id='email' onChange={handleChange}/>
        <Input showerros={showErros} type="password" placeholder='Senha' onChange={handleChange} id='password'/>
        <Input showerros={showErros} type="password" placeholder='Confirmar senha' onChange={handleChange} id='confirmPassword'/>
        <button type='submit'>{props.button}</button>
        </>
        :
        !props.signup &&
        <>
        <Input showerros={showErros} type="text" placeholder='Nome' onChange={handleChange} id='name' />
        <Input showerros={showErros} type="email" placeholder='E-mail' id='email' onChange={handleChange}/>
        <Input showerros={showErros} mask={['(',/[0-9]/,/[0-9]/,')',' ',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,'-',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]}
                            pattern='\([0-9]{2}\) [0-9]{5}-[0-9]{4}$' placeholder='Telefone' id='phone' onChange={handleChange}/>
        <button type='submit'>{props.button}</button>
        </>
        }
    </form>
  );
}

export default Form;