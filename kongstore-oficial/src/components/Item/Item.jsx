import React from 'react';
import {Link} from 'react-router-dom';

function Item (prod) {

    return(
        
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
                    <Link to={`/categoria/${prod.id}`}>

                        <button href="#" className="card-link">
                            COMPRAR
                        </button>

                        <button href="#" className="card-link">
                            VER MÁS
                        </button>
                        
                    </Link>
                </div>

            </div> 

        </div>
    )
}

export default Item;