// UNA VEZ QUE HAGAMOS CLICK EN EL PRODUCTO QUE QUERRAMOS VAMOS A IR A UNA SECCION ESPECIFICA DE ESE PRODUCTO.
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const {id} = useParams();
    console.log(id);

    return (

        <div>
            ItemDetailContainer
        </div>
    )

}

export default ItemDetailContainer



// esto me devuelve un objeto que dentro tiene el id que le definimos en APP '/detalle/:id
//const {} = useParams();

// se puede aplicar DESTRUCTURING para filtrar solo un producto. Acá no utilizo MAP ya que solo con este metodo nos interesa mostrar 1 objeto.