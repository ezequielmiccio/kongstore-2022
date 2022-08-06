import React, { useState } from 'react';

export const GameCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial);

    const restar = () => {
        if(count > initial){
            setCount(count - 1);
        }
    }

    const sumar = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    return (
        <React.Fragment>
            <div>
                <span onClick={restar}> - </span>
                <span> {count} </span>
                <span onClick={sumar}> + </span>
            </div>
            <div>
                <button disabled={count===initial} onClick={() => onAdd(count)}> Agregar al carrito </button>
            </div>
        </React.Fragment>
    );

};