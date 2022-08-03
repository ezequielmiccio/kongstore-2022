import React from 'react';
import {Link} from 'react-router-dom';

function Item ({prod}) {

    return(
        
        <div key={prod.id} className='col-xs-12 col-sm-6 col-md-4 col-lg-4 p-1'>
                    
            <div className="card w-100">
                <img src={prod.img} className="card-img-top" alt="img"/>
                <div className="card-body">
                    <h3 className="card-title">{prod.name}</h3>
                    <p className="card-text">{prod.info}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <p className="list-group-item">{prod.name}</p>
                    <p className="list-group-item">{prod.categoria}</p>
                    <p className="list-group-item">${prod.precio}</p>
                    <p className="list-group-item">{prod.info}</p>
                </ul>
                <div className="card-body">
                    <Link to={`/detail/${prod.id}`}>

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