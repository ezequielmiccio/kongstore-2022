import React, {useState, useEffect, useParams} from 'react'
import {gFetch} from '../products/products';
import Formulario from '../Formulario/Formulario'

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
             products.map(prod =>
                <div key={prod.id} className='col-md-4 p-1'>
                
                    <div className="card w-100">
                        <img src={prod.img} className="card-img-top" alt="img"/>
                        <div className="card-body">
                            <h5 className="card-title">{prod.name}</h5>
                            <p className="card-text">{prod.info}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{prod.name}</li>
                            <li className="list-group-item">${prod.precio}</li>
                            <li className="list-group-item">{prod.info}</li>
                        </ul>
                        <div className="card-body">
                            <p href="#" className="card-link">COMPRAR</p>
                            <p href="#" className="card-link">VER MÁS</p>
                        </div>

                    </div> 

                </div> )
            }
            
        </div>
    )

}
export default ItemListContainer;

// Contienen lógica de estados.
// Contienen componentes contenedores.