import React, {useState, useEffect} from 'react'
import {gFetch} from '../products/products';
import Formulario from '../Formulario/Formulario'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    //let titulo = 'Titulo desde ItemListContainer';
    //let subTitulo = 'Subtitlo desde ItemListContainer';

    // inicializo con array vacio ya que espero array desde otro archivo
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

/*     const {categoriaId} = useParams();
    console.log(categoriaId); */
    
    useEffect(() => {
        // si coincide me devuelve un array con filter id
        if(loading) {
            gFetch
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }else {
            gFetch
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

    }, [loading])


    const handleBool = () => {
        setLoading(!loading);
    }

    console.log(products);

    return(
        <div>

            <Formulario />
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
// <Titulo titulo={titulo} subTitulo={subTitulo} />