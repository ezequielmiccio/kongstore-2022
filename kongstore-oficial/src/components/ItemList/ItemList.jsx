import React, { useContext } from 'react';
import Item from "../Item/Item";
import { GamesContext } from "../GamesContext/GamesContext";

function ItemList () {
    const[games] = useContext(GamesContext);

    return (
        <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
            }}
        >
            {games.map((item) =>
                <Item prod={item}/>
            )}
        </div>
    );

}

export default ItemList;