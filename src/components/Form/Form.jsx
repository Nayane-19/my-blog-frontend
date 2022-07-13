import React from 'react';
import './Form.scss'




function Form() {   

  return (
    <form className='Form column'>
        <p>Se inscreva na nossa Newsletter</p>
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='E-mail' />
        <input type="number" placeholder='Telefone'/>
        <button type='submit'>Enviar</button>
    </form>
  );
}

export default Form;