import React from "react";

// detalle del producto seleccionado con find

const ItemDetail = ({detail}) => {

    return (

        <div key={detail.id} className='col-md-4 p-1'>
                
            <div className="card w-100">
                <img src={detail.img}className="card-img-top" alt="img"/>

                <div className="card-body">
                    <h5 className="card-title text-dark">{detail.name}</h5>
                    <p className="card-text text-dark">{detail.categoria}</p>
                    <p className="card-text text-dark">{detail.info}</p>
                </div>

                <div className="card-body">
                    <button href="#" className="card-link">
                        COMPRAR
                    </button>
                </div>
                                
            </div> 
                                
        </div>
    )

}

export default ItemDetail;