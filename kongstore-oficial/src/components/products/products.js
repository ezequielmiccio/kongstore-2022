const products = [
    {   id: 1, 
        name: "Fifa 20" ,
        categoria: 'Juegos',
        precio: 4500 , 
        img: "./assets/img/fifa20.jpg" , 
        ahorro: "15%" , 
        info: "Deportes",
        stock: 20
    },

    {   id: 2, 
        name: "NBA 2k20",
        categoria: 'Juegos', 
        precio: 3750 , 
        img: "./assets/img/pes2020.jpg" , 
        ahorro: "25%" , 
        info: "Deportes",
        stock: 20
    },

    {   id: 3, 
        name: "PES 2020" ,
        categoria: 'Juegos', 
        precio: 2600 , 
        img: "./assets/img/nba2k20.jpg" , 
        ahorro: "30%" , 
        info: "Deportes",
        stock: 20
    },

    {   id: 4, 
        name: "GTA V" ,
        categoria: 'Juegos', 
        precio: 3200 , 
        img: "./assets/img/gtaV.jpg" , 
        ahorro: "15%" , 
        info: "GTA V esta diseñado para mayores de 16 años",
        stock: 20
    },

    {   id: 5, 
        name: "Crash Team Racing" ,
        categoria: 'Juegos', 
        precio: 5700 , 
        img: "./assets/img/crashRacing.jpg" , 
        ahorro: "10%" , 
        info: "Aventura, Carrera",
        stock: 20
    },

    {   id: 6, 
        name: "Mortal Kombat XL" ,
        categoria: 'Juegos', 
        precio: 1900 , 
        img: "./assets/img/mortalkombatXL.jpg" , 
        ahorro: "50%", 
        info: "Sangriento, 1 vs 1, Multiplayer",
        stock: 20
    },

    {   id: 7, 
        name: "Call Of Duty" ,
        categoria: 'Juegos', 
        precio: 4600 , 
        img: "../../../assets/img/callOfDuty.jpg" , 
        ahorro: "20%" , 
        info: "Asesinatos, Modern Warfare, Multiplayer",
        stock: 20
    },
    
    {   id: 8, 
        name: "Need For Speed" ,
        categoria: 'Juegos', 
        precio: 1200 , 
        img: "./assets/img/nfsHeat.jpg" , 
        ahorro: "65%" , 
        info: "Carrera, Adrenalina, Multiplayer",
        stock: 20
    }
];

export default products;

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