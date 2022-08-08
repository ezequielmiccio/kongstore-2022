// responsable de enviar el producto al carrito

import React, { useContext, useState } from "react";
import { GameCount } from "../../GameCount/GameCount";
import { CartContext } from "../../GamesContext/GamesContext";
import { Link } from "react-router-dom";


const ItemDetail = ({detail}) => {
    const [cart, addCart] = useContext(CartContext)
    const [quantity, setQuantity] = useState();
    console.log("Cart", cart)

    const functionContador = (contador) => {
        alert("Añadiste " + contador + " productos al carrito.");
        setQuantity(contador);

        const game = {item: detail, cantidad: contador}
        addCart(game);
    }

    return (

        <div key={detail.id} className="d-flex column">
                
            <div className="card col-lg-6 col-md-6 col-xs-12 mb-3">
                <img src={detail.img} className="card-img-top" alt="img"/>

                <div className="card-body">
                    <h5 className="card-title text-dark">{detail.name}</h5>
                    <p className="card-text text-dark">{detail.categoria}</p>
                    <p className="card-text text-dark">{detail.info}</p>
                    <p className="card-text text-dark">{"¡Últimas " + detail.stock + " unidades!"}</p>
                </div>
            </div> 

            <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                {quantity ? <Link to='/cart'><button>Finalizar compra</button></Link> : <GameCount stock={detail.stock} initial={0} onAdd={functionContador}/>}
            </div>          
            
        </div>
    )

}

export default ItemDetail;