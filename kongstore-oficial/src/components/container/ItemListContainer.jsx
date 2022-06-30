import React, {useState, useEffect} from 'react'
import {gFetch} from '../products/products';
import Formulario from '../Formulario/Formulario'
import Titulo from '../Titulo/Titulo'

const ItemListContainer = () => {
    //let titulo = 'Titulo desde ItemListContainer';
    //let subTitulo = 'Subtitlo desde ItemListContainer';

    // inicializo con array vacio ya que espero array desde otro archivo
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gFetch
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

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
                            <a href="#" className="card-link">COMPRAR</a>
                            <a href="#" className="card-link">VER MÁS</a>
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

/* 

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
*/