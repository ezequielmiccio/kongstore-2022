const productos = [
    {id: '1' , categoria: 'remera' , name: "juan" , price: 55},
    {id: '2' , categoria: 'remera' , name: "juan" , price: 55},
    {id: '3' , categoria: 'remera' , name: "juan" , price: 55},
    {id: '4' , categoria: 'remera' , name: "juan" , price: 55},
    {id: '5' , categoria: 'remera' , name: "juan" , price: 55}
]

export const gFetch = new Promise( (resolve, reject) => () => {
    let condition = true;
 
   if(condition){
    //setTime para que se muestre a los 3 segundos
    setTimeout(() => {
        resolve(productos); // retorna productos
    }, 3000)
   } else {
      reject('error')
   }
 
})