import Titulo from "../Titulo/Titulo";

const Formulario = () => {
    return(
        <div>
            <Titulo titulo={'Titulo Form'} subTitulo={'Subtitulo form'} />
            <input type="text" />
        </div>
    )
}

export default Formulario;
  
// Un componente puede ser llamado la cantidad de veces que quiera, en este caso estamos volviendo a llamar al componente Titulo y se lo estamos definiendo al Formulario.