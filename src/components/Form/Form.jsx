import React, { useState } from 'react';
import './Form.scss'
import InputMask from 'react-text-mask'
import Input from '../Input/Input';




function Form(props) {   
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassord, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    console.log(e.target.validationMessage);
  }

  return (
    <form className='Form column'>
        <p>{props.title}</p>
        {props.login ?
        <>
           <input type="text" placeholder='E-mail' id='e_mail' onChange={handleChange}/>
           <input type="password" placeholder='Senha' onChange={handleChange}/>
           <button type='submit'>{props.button}</button>
        </>
        :
          props.signup ?
          <>
        <input type="text" placeholder='Nome' onChange={handleChange}/>
        <input type="e-mail" placeholder='E-mail' id='e-mail' onChange={handleChange}/>
        <Input id='phone' mask={['(',/[0-9]/,/[0-9]/,')',' ',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,'-',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]}
                            pattern='\([0-9]{2}\) [0-9]{5}-[0-9]{4}$' placeholder='Telefone' onChange={handleChange}/>
        <input type="password" placeholder='Senha' onChange={handleChange}/>
        <input type="password" placeholder='Confirmar senha' onChange={handleChange}/>
        <button type='submit'>{props.button}</button>
        </>
        :
        <>
        <input type="text" placeholder='Nome' onChange={handleChange} />
        <input type="e-mail" placeholder='E-mail' id='mail' onChange={handleChange}/>
        <Input mask={['(',/[0-9]/,/[0-9]/,')',' ',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,'-',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]}
                            pattern='\([0-9]{2}\) [0-9]{5}-[0-9]{4}$' placeholder='Telefone'/>
        <button type='submit'>{props.button}</button>
        </>
        }
    </form>
  );
}

export default Form;