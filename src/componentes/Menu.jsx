import { useState } from "react";
import "./estilosMenu.css"
import { Link } from "react-router-dom";


export function Menu({pasarValorBoton, pasarRuta, ejecutarLlamado}) {

  //const [mangaFull, setManga] = useState();
  const [id, setId] = useState();
  const [value, setValue] = useState()
  //const [section, setSection] = useState(true)

  //si la llamada a la api se pone fuera de un use efect para que se ejecute solo una ves lo que va a 
  //pasar es que la llamada se ejecutara de forma infinita 
  

  return (
    <div className="menu">
      <div className="section">
          
        <input          
          onChange={(e)=>{setId(e.target.value)}}
          value={value}
          type="text"
          name="buscador"
          placeholder="Escriba un numero"
          onKeyDown={(e)=> {if(e.code == "Enter")ejecutarLlamado()}}
        />
        <Link to="/mangaId">
          <button onClick={()=>{ejecutarLlamado(id); setValue("")}}>Buscar</button>
        </Link>
        {/* 
        {/* si en el mangafull hay algo se habiilta la opcion para cambiar el estado del section
            y el manga  
        
        {mangaFull && <button onClick={()=>{setSection(!section); setManga("")}}>Cerrar</button>}

        {/* solo cuando el section sea false se deja de renderizar el elemento 
        {section && <RenderManga mangaFull={mangaFull}/>} 
        */}
        
      </div>
      
      <div>
        <Link to="/aventura">
          <button onClick={()=>{pasarValorBoton("Adventure"); pasarRuta("/aventura")}}>Aventura</button>
        </Link>
        <Link to="/deportes">
          <button onClick={()=>{pasarValorBoton("Sports"); pasarRuta("/deportes")}}>Deportes</button>
        </Link>
        <Link to="/drama">
          <button onClick={()=>{pasarValorBoton("Drama"); pasarRuta("/drama")}}>Drama</button>
        </Link>
      </div>
    </div>  
  );
}
