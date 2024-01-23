import React from 'react'
import  {useState} from 'react'

export const AddCategory = ({ onNewCatagory }) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
    
        const isInputValid = inputValue.trim().length > 1;
    
        if (isInputValid) {
            onNewCatagory(inputValue.trim());
            setInputValue('');
        }
    }
    
  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={ inputValue } 
            onChange={ onInputChange } 
        />
    </form>
    
  )
}
