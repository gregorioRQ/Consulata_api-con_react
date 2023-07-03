
import { Link} from "react-router-dom";

export function CartaDelCarrusel({obj, fn}){
    /* 
        recibe el manga(obj) y una funcion para pasar el obj al componente App
        esta funcion renderiza una pre vista del manga con su ranked y la posibilidad 
        de verlo a detalle con un link
    */
    return(  
            <div>
                <img src={obj?.images?.jpg.image_url} alt="imagen manga" />
                <h2>{obj?.raked}</h2>
                
                <Link onClick={()=>fn(obj)} to="/manga">VER MANGA</Link> 
                  
            </div>   
    )
}