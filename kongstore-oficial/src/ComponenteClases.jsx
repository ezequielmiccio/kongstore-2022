// al escribir rcc (react create class) se crea el siguiente render (renderización) creando un componente de clase. 
// Creamos la clase ComponenteClases dentro de Componente.

import React, { Component } from 'react'

export default class ComponenteClases extends Component {
  render() {
    return (
      <div>
        <h1>ComponenteClases</h1>
        <button>Click</button>
      </div>
    )
  }
}

/* 

En React vamos a utilizar FUNCIONES y no CLASES por eso a través de App vamos a reemplazar este codigo de clases a través de funciones.

*/