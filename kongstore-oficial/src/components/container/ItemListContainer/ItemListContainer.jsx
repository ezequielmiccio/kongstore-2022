import React, {useState, useEffect} from 'react'
import {gFetch} from '../../products/products';
import ItemList from '../../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {categoryId} = useParams;
    // inicializo con array vacio ya que espero array desde otro archivo
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)
            gFetch
            .then((resp) => {
                if(categoryId !== undefined) {
                    const filtro = resp.filter((e) => e.categoria === categoryId);
                    setProducts(filtro);

                } else {
                    setProducts(resp);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]) 

    return(
        <div>

            {loading ? 
              <h2>Cargando productos...</h2>
             :
             <ItemList productos={products}/>
            }
            
        </div>
    );
    
};

export default ItemListContainer;



// Contienen lógica de estados.
// Contienen componentes contenedores.
// <Titulo titulo={titulo} subTitulo={subTitulo} />