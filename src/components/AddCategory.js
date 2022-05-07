import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setinputValue] = useState('');
  
  const handleInputChange = ( e ) => {
      setinputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2){//trim es para borrar los espacios vacios
        setCategories( cats => [ inputValue, ...cats ] );
        setinputValue('');//esto es para que despues del primer enter ya no aparezca el mensaje default hola mundo
    }
   
  }

  return (
    <>
        <form onSubmit={ handleSubmit }>
            <input
            type='text'
            value={ inputValue }
            onChange={ handleInputChange }
            />
        </form>
        
    </>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


