import React from 'react'
import Formulario from '../Formulario/Formulario'
import Titulo from '../Titulo/Titulo'

function ItemListContainer() {

    let titulo = 'Mostrar mensaje en pantalla';
    let subTitulo = 'Desafio clase 3/4';

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
