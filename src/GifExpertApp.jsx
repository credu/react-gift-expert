import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState( ['One Punch'] );
  
  const onAddCategory = ( newCategory ) => {

    if ( categorias.includes(newCategory) ) return;

    //categorias.push( newCategory );
    setCategorias( [newCategory, ...categorias] );
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ event => onAddCategory(event) }
      />

      {
        categorias.map( categoria => (
          <GifGrid key={ categoria } categoria={ categoria } />
        ))
      }

    </>
  )
}