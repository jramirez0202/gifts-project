import React from 'react'
import  {useState} from 'react'

export const AddCategory = ({ onNewCatagory }) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        // esta condicion limpia el valor inputValue para que no tenga espacios ni este vacio
        // al momento de insertar un texto si no se cumple la condicion entonces return;
        if ( inputValue.trim().length <= 1 ) return;

        // con esto usamos el onNewCatagory que traimos en la L4 (linea 4) y el inputValue
        // es lo que se escribe en la barra
        
        onNewCatagory( inputValue.trim());

        //AL estar en la ultima linea setInputValue tiene los valores de inputValue
        // asi que al tener '' limpia el valor con ese string vacio que le mandamos
        setInputValue('');
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
