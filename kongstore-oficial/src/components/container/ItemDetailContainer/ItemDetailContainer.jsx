// UNA VEZ QUE HAGAMOS CLICK EN EL PRODUCTO QUE QUERRAMOS VAMOS A IR A UNA SECCION ESPECIFICA DE ESE PRODUCTO.
import { useParams } from "react-router-dom"
import {useState, useEffect} from "react";
import { gFetch } from "../../GamesContext/GamesContext";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [itemProd, setItemProd] = useState([]);
    const [loading, setLoading] = useState(false);

    const {detailId} = useParams();
    console.log(detailId);

    useEffect(() => {
        setLoading(true);
        // si coincide me devuelve con array con filter id
        gFetch
        .then((resp) => {
            if(detailId) {
                const element = resp.find((e) => e.id === Number(detailId));
                setItemProd(element);
            } else {
                setItemProd(resp);
            }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [detailId]);
    

    return (

        <div>
            {loading ?
                <p>Cargando detalle ...</p>
             : 
                <ItemDetail detail={itemProd}/> 
            }
        </div>
    )

}

export default ItemDetailContainer



// esto me devuelve un objeto que dentro tiene el id que le definimos en APP '/detalle/:id
//const {} = useParams();

// se puede aplicar DESTRUCTURING para filtrar solo un producto. Acá no utilizo MAP ya que solo con este metodo nos interesa mostrar 1 objeto.