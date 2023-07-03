import { useState, useEffect } from "react";
import * as API from "../llamadaApi";
import { CartaDelCarrusel } from "./CartaDelCarrusel";

export function Filtro({valorDelBoton, pasarObjetos}){

    const [generoSeleccionado, setGeneroSeleccionado] = useState();
    const [mangas, setMangas] = useState([]);

    useEffect(()=>{
        API.getManga().then(data => setMangas(data.data));   
    },[]);
     if (generoSeleccionado!==valorDelBoton)setGeneroSeleccionado(valorDelBoton)
    
    return(
        <div>   
             {mangas?.filter(m => m?.genres[0]?.name == generoSeleccionado || m?.genres[1]?.name == generoSeleccionado || m?.genres[2]?.name == generoSeleccionado || m?.genres[3]?.name == generoSeleccionado).map((m) =>(
                <li key={m?.mal_id}>
                    <CartaDelCarrusel obj={m} fn={pasarObjetos}/>
                </li>
            ))}
        </div>
       
    )
   
}