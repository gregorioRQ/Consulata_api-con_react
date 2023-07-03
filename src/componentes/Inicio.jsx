
import { useState, useEffect } from "react";
import { CartaDelCarrusel } from "./CartaDelCarrusel";
import * as API from "../llamadaApi";
import "./estilosCarrusel.css"


export function Inicio({pasarObjetos}){

    const [manga, setManga] = useState([]);

    //se ejecutara una vez cuando se cargue el componente y hara la llamada
    //lo guarda en un estado
    useEffect(()=>{
        API.getManga().then(data => setManga(data.data))
    },[]);
  
    //los numeros aleatorios sirven para seleccionar objetos distintos cada que se renderice la app
    //(mejorar: el array genera numeros iguales)
    const arrayNumsAleatorios = Array.from({ length: 6 }, () => Math.floor(Math.random(5)*13));
    console.log(arrayNumsAleatorios);
    const mangaObj1 = manga[arrayNumsAleatorios[0]];
    const mangaObj2 = manga[arrayNumsAleatorios[1]];
    const mangaObj3 = manga[arrayNumsAleatorios[2]];
    const mangaObj4 = manga[arrayNumsAleatorios[3]];
    const mangaObj5 = manga[arrayNumsAleatorios[4]];
    const mangaObj6 = manga[arrayNumsAleatorios[5]];

    
    //para pasar funciones, arreglos, objetos, numeros y booleanos en jsx hay que pasarlas entre llaves los strings no cuentan los objetos se pasan asi( obj={{x:20}}).
    return(
        <article className="asideCarrusel">
            
          <CartaDelCarrusel obj={mangaObj1} fn={pasarObjetos}/>
          <CartaDelCarrusel obj={mangaObj2} fn={pasarObjetos}/>
          <CartaDelCarrusel obj={mangaObj3} fn={pasarObjetos}/>
          <CartaDelCarrusel obj={mangaObj4} fn={pasarObjetos}/>
          <CartaDelCarrusel obj={mangaObj5} fn={pasarObjetos}/>
          <CartaDelCarrusel obj={mangaObj6} fn={pasarObjetos}/> 
            
        </article>
    )
}