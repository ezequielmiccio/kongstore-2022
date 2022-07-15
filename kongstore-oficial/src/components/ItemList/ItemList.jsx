import React from "react";
import Item from "../Item/Item";
import products from '../products/products';

function ItemList () {

    return (
        <React.Fragment>
            {products.map(prod =>
                <div>
                    <Item />
                </div> 
            )}
        </React.Fragment>
    );

}

export default ItemList;