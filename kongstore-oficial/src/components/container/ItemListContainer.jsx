import React, {useState, useEffect, useParams} from 'react'
import {gFetch} from '../products/products';
import Formulario from '../Formulario/Formulario'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    //let titulo = 'Titulo desde ItemListContainer';
    //let subTitulo = 'Subtitlo desde ItemListContainer';

    // inicializo con array vacio ya que espero array desde otro archivo
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoriaId} = useParams();
    console.log(categoriaId);

    useEffect(() => {
        // si coincide me devuelve un array con filter id
        if(categoriaId) {
            gFetch
            .then(resp => setProducts(resp.filter(prod => prod.categoria === categoriaId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }else {
            gFetch
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

    }, [categoriaId])


    const handleBool = () => {
        setLoading(!loading);
    }

    console.log(products);

    return(
        <div>

            <Formulario />
            {/* <Titulo titulo={titulo} subTitulo={subTitulo} /> */}
            <button onClick={handleBool}>VER PRODUCTOS</button>

            {loading ? 
              <h2>Cargando productos...</h2>
             :
             <ItemList />
            }
            
        </div>
    )

}
export default ItemListContainer;

// Contienen lógica de estados.
// Contienen componentes contenedores.