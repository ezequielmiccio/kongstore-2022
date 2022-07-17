import React from 'react';
import Item from "../Item/Item";
import products from '../products/products'

function ItemList () {

    return (
        <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
            }}
        >
            {products.map(() =>
                <Item />
            )}
        </div>
    );

}

export default ItemList;