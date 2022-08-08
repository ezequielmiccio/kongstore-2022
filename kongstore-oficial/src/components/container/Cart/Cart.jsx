import { useContext } from 'react';
import { GamesContext } from '../../GamesContext/GamesContext';
import { CartContext } from '../../GamesContext/GamesContext';
import Item from '../../Item/Item';

const Cart = () => {
    const [cart, removeCart] = useContext(CartContext); 
    const[games] = useContext(GamesContext);
    console.log("CartContext:", cart);
    console.log("GamesContext:", games);

    return (

        <div>
            <h3>Carro de compras</h3>
            { games.map((item) => 
                <Item prod={item} cantidad/>
            )}

            <button onClick={removeCart()}>Vaciar Carrito</button>
        </div>
    )

}

export default Cart;