import { useState, useEffect } from "react"
import * as API from "../llamadaApi";
import "./estilosCarrusel.css"

export function Generos(){

    
    const [genero, setGenero] = useState("");
    const [mangas, setMangas] = useState([])

    useEffect(()=>{
        API.getManga().then(data => setMangas(data.data))
    },[]);

    const arr  = [];

   for(let i = 0; i<mangas.length; i++){
    if(genero === mangas[i]?.genres[0]?.name){
        arr.push(mangas[i])
    }
   }

    return(
        <div>
            <button onClick={()=>setGenero("Action")}>Accion</button>
            <button onClick={()=>setGenero("Adventure")}>Aventura</button>
            <button onClick={()=>setGenero("Comedy")}>Comedia</button>
            <button onClick={()=>setGenero("Drama")}>Drama</button>

            <div className="renderListaGeneros">
               <ul>
                    {arr?.map((elemento)=>(
                        <li key={elemento.mal_id}>
                            <h1>{elemento?.title}</h1>
                            <img src={elemento.images?.jpg.image_url} />
                        </li>
                    ))}
                </ul> 
            </div>
                  
 
        </div>
        
    )
}