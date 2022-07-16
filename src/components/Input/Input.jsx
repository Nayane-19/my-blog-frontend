import React, { useState } from 'react';
import './Input.scss';

import InputMask from 'react-text-mask'

function Input(props) {
    const [empty,setEmpty] = useState(true);
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        if(props.onChange)
            props.onChange(e);
        setEmpty(e.target.value === '')
        if(e.target.validity.customError)
            e.target.setCustomValidity('');

        if(e.target.validationMessage!==errorMessage)
            setErrorMessage(e.target.validationMessage)
    }

    return (
        <>
            {props.mask?
                <InputMask placeholderChar='_' {...props} ref={props.inputRef} name={props.id}onChange={handleChange} required={!props.optional} />
            :
               <input {...props} ref={props.inputref} name={props.id} onChange={handleChange} required={!props.optional} />
            }
            {errorMessage &&
             <label className="labelInvalid" htmlFor={props.id}>{errorMessage}</label>
            }
        </>
    )
};

export default Input;