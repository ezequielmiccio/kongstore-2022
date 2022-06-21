/* const Titulo = () => {
    return(<h1>Titulo App</h1>);
} */

// Se puede hacer a través de la isguiente forma con props (params)

const Titulo = ( {titulo, subTitulo, functionParam} ) => {
    functionParam();
    return(
        <div>
            <h1>{titulo}</h1>
            <h2>{subTitulo}</h2>
        </div>
    )
}

export default Titulo

/*   
  Ambas significan lo mismo:

  {Titulo()} esta forma es de la forma nativa js
  <Titulo /> esta forma es la que reemplaza js con jsx

*/