import React, {useState, useEffect} from 'react'
import {gFetch} from '../products/products'
import Formulario from '../Formulario/Formulario'
import Titulo from '../Titulo/Titulo'

function ItemListContainer() {

    // inicializo con array vacio ya que espero array desde otro archivo
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let titulo = 'Mostrar mensaje en pantalla';
    let subTitulo = 'Desafio clase 3/4';

    // creamos la promesa en "productos" y capturamos el resultado desde otra funcion padre ya que la promesa es callback.
    // utilizamos el useEffect para que se ejecute despues de que se monte el código.
    useEffect(() => {
        gFetch // simular un llamado de api
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
    }, []) // agregamos segundo parametro para que se ejecute solo una vez

    const handleBool = () => {
        setLoading(!loading);
    }

    console.log(products);

/*   return (
        <div>
            <Titulo titulo={titulo} subTitulo={subTitulo} />
            <button onClick={handleBool}>cambiar estado</button>
            <Formulario />
        </div>
    ) */

    // el .map me devuelve otro array tomando como base el [1, 2, 3, 4]
    // quedando <li>1</li> <li>2</li> <li>3</li> etc
/*     return (
        <div>
            {[1, 2, 3, 4].map((nro, index) => <li key={index}>{nro}</li>)}
        </div>
    ) */
    // cuando hay solo un param no se precisa () en una callback}

    // loading con ternario para que mientras cargue los 3 segundos nos diga que esta cargando

    return(
        <div>
            {loading ? 
              <h2>Cargando...</h2>
            :

            products.map(prod => <li key={prod.id}>{prod.name}</li>)
            }
            
        </div>
    )
    // en este caso como cada producto del array tiene un ID unico no hace falta agregar index como param ya que podemos llamar ese ID como KEY.
}

export default ItemListContainer;

// Contienen lógica de estados.
// Contienen componentes contenedores.