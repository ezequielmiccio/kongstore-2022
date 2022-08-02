/* import React, { createContext, useState} from "react";

// CONTEXT != PROPS DRILLING (UNIDIRECCIONALIDAD)

export const GamesContext = createContext();

const initialState = [
    {id: 1, name: "Fifa 20" ,categoria: 'pc',precio: 4500 , ahorro: "15%" , info: "Deportes",stock: 20},
    {id: 2, name: "NBA 2k20",categoria: 'pc', precio: 3750 , ahorro: "25%" , info: "Deportes",stock: 20},
    {id: 3, name: "PES 2020" ,categoria: 'ps4', precio: 2600 , ahorro: "30%" , info: "Deportes",stock: 20},
    {id: 4, name: "GTA V" ,categoria: 'ps4', precio: 3200 , ahorro: "15%" ,info: "GTA V esta diseñado para mayores de 16 años",stock: 20},
    {id: 5, name: "Crash Team Racing" ,categoria: 'ps5',  precio: 5700, ahorro: "10%" , info: "Aventura, Carrera",stock: 20},
    {id: 6, name: "Mortal Kombat XL" ,categoria: 'ps5', precio: 1900 , ahorro: "50%", info: "Sangriento, 1 vs 1, Multiplayer",stock: 20},
    {id: 7, name: "Call Of Duty" ,categoria: 'ps4', precio: 4600 , ahorro: "20%" , info: "Asesinatos, Modern Warfare, Multiplayer",stock: 20},
    {id: 8, name: "Need For Speed" ,categoria: 'ps5', precio: 1200 , ahorro: "65%" , info: "Carrera, Adrenalina, Multiplayer",stock: 20}
];

export const GamesProvider = ({children}) => {
    const [games, setGames] = useState(initialState);

    return (
        <GamesContext.Provider value={[games, setGames]}>
            {children}
        </GamesContext.Provider>
    )

};
 */


