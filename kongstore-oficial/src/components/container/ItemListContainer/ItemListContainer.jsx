import React, { useContext, useState, useEffect} from 'react'
import { gFetch } from '../../products/productsProvider';
import ItemList from '../../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { GamesContext } from '../../products/productsProvider';

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [games, setGames] = useContext(GamesContext)
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)
            gFetch
            .then((resp) => {
                if(categoryId !== undefined) {
                    const filtro = resp.filter(e => e.categoria === categoryId);
                    setGames(filtro);

                } else {
                    setGames(resp);
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
              <ItemList productos={games}/>
            }
            
        </div>

    );
    
};

export default ItemListContainer;



// Contienen lógica de estados.
// Contienen componentes contenedores.
// <Titulo titulo={titulo} subTitulo={subTitulo} />