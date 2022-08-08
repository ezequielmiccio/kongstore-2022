import React, { createContext, useState } from "react";

export const GamesContext = createContext();
export const CartContext = createContext();

const products = [
    {   id: 1, 
        name: "Fifa 20" ,
        categoria: 'PC',
        precio: 4500 , 
        img: "../../../assets/img/fifa20.jpg" , 
        ahorro: "15%" , 
        info: "Deportes",
        stock: 12
    },

    {   id: 2, 
        name: "NBA 2k20",
        categoria: 'PC', 
        precio: 3750 , 
        img: "../../../assets/img/pes2020.jpg" , 
        ahorro: "25%" , 
        info: "Deportes",
        stock: 13
    },

    {   id: 3, 
        name: "PES 2020" ,
        categoria: 'PS4', 
        precio: 2600 , 
        img: "../../../assets/img/nba2k20.jpg" , 
        ahorro: "30%" , 
        info: "Deportes",
        stock: 16
    },

    {   id: 4, 
        name: "GTA V" ,
        categoria: 'PS4', 
        precio: 3200 , 
        img: "../../../assets/img/gtaV.jpg" , 
        ahorro: "15%" , 
        info: "GTA V esta diseñado para mayores de 16 años",
        stock: 8
    },

    {   id: 5, 
        name: "Crash Team Racing" ,
        categoria: 'PS5', 
        precio: 5700 , 
        img: "../../../assets/img/crashRacing.jpg" , 
        ahorro: "10%" , 
        info: "Aventura, Carrera",
        stock: 6
    },

    {   id: 6, 
        name: "Mortal Kombat XL" ,
        categoria: 'PS4', 
        precio: 1900 , 
        img: "assets/img/mortalkombatXL.jpg" , 
        ahorro: "50%", 
        info: "Sangriento, 1 vs 1, Multiplayer",
        stock: 10
    },

    {   id: 7, 
        name: "Call Of Duty" ,
        categoria: 'PS5', 
        precio: 4600 , 
        img: "assets/img/callOfDuty.jpg" , 
        ahorro: "20%" , 
        info: "Asesinatos, Modern Warfare, Multiplayer",
        stock: 15
    },
    
    {   id: 8, 
        name: "Need For Speed" ,
        categoria: 'PS4', 
        precio: 1200 , 
        img: "assets/img/nfsHeat.jpg" , 
        ahorro: "65%" , 
        info: "Carrera, Adrenalina, Multiplayer",
        stock: 30
    },

    {   id: 9, 
        name: "UFC 3" ,
        categoria: 'PS5', 
        precio: 1700 , 
        img: "assets/img/nfsHeat.jpg" , 
        ahorro: "25%" , 
        info: "Pelea, Multiplayer",
        stock: 10
    }
];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addCart = (item) => {
        cart.push(item);
    }

    const removeCart = (id) => {

    }

    const emptyCart = () => {
        setCart([]);
    }

    const sentToCart = (id) => {

    }

    return(
        <CartContext.Provider value={[cart, setCart, addCart, removeCart, emptyCart, sentToCart]}>
            {children}
        </CartContext.Provider>
    )
}

export const GamesProvider = ({children}) => {
    const [games, setGames] = useState(products);

    return (
        <GamesContext.Provider value={[games, setGames]}>
            {children}
        </GamesContext.Provider>
    )

};

export const gFetch = new Promise( (resolve, reject) => {
    let condition = true;
 
    if(condition) {
     setTimeout(() => {
            resolve(products);
        }, 2000)
    } else {
      reject('400 not found');
    }
})