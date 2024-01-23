import React from 'react'
import { useState } from 'react';
import { AddCategory, GridGift } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);

    const onAddCategory = ( newCategory ) => {  

        if (categories.includes(newCategory)) return; /* esta es la validacion para que no se repita el nombre*/
        
        setCategories([newCategory, ...categories])
    }
    
  return(
    <>
      {/* titulo */}
      <h1 className="titles">GifExpertApp</h1>
      

      {/* input */}
      <AddCategory 
        onNewCatagory = {value => onAddCategory(value)}
      />
      
      {categories.map( (category) => (
          <GridGift 
            key={category}
            category = {category} 
          />
        ))
      }
    </>
  );
};
