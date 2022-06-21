import React from 'react'
import Formulario from '../Formulario/Formulario'
import Titulo from '../Titulo/Titulo'

function ItemListContainer() {

    let titulo = 'titulo de App';
    let subTitulo = 'subtitulo de App';

  return (
        <div>
            <Titulo titulo={titulo} subTitulo={subTitulo} />
            <Formulario />
        </div>
    )
}

export default ItemListContainer;

// Contienen lógica de estados.
// Contienen componentes contenedores.
