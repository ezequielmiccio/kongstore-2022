import React from 'react';
import Item from "../Item/Item";

function ItemList ({productos}) {

    return (
        <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
            }}
        >
            {productos.map((item) =>
                <Item prod={item}/>
            )}
        </div>
    );

}

export default ItemList;