import React from "react";
import { GameCount } from "../../GameCount/GameCount";

// detalle del producto seleccionado con find

const ItemDetail = ({detail}) => {

    const functionContador = (contador) => {
        alert("Añadiste " + contador + " productos al carrito.");
    }

    return (

        <div key={detail.id} className="d-flex column">
                
            <div className="card col-lg-6 col-md-6 col-xs-12 mb-3">
                <img src={detail.img} className="card-img-top" alt="img"/>

                <div className="card-body">
                    <h5 className="card-title text-dark">{detail.name}</h5>
                    <p className="card-text text-dark">{detail.categoria}</p>
                    <p className="card-text text-dark">{detail.info}</p>
                </div>
            </div> 

            <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                <GameCount stock={5} initial={0} onAdd={functionContador}/>
            </div>          
            
        </div>
    )

}

export default ItemDetail;