
import { Link, Route, Routes } from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import { Menu } from './componentes/Menu';
import { TarjetaDetallada } from "./componentes/TarjetaDetallada";
import { useState } from 'react';
import { Filtro } from './componentes/Filtro';
import * as API from "./llamadaApi";


function App() {

  const [mObj, setMobj] = useState();
  const [valorBoton, setValorBoton] = useState();
  const [ruta, setRuta] = useState();
  const [mangaFull, setManga] = useState();

  const pasarObjetos =(o)=>{setMobj(o)}

  const pasarValorBoton = (v)=>{setValorBoton(v)}
    
  const pasarRuta = (r)=>{setRuta(r)}

  const ejecutarLlamado = (idManga)=>{
    API.getMangabyId(idManga).then((mangaFull)=>setManga(mangaFull))
  };

  
  return (
    <div>
      
      <header>
        <Link to="/">MANGAS</Link>
        <Menu pasarValorBoton={pasarValorBoton} pasarRuta={pasarRuta} ejecutarLlamado={ejecutarLlamado} />
      </header>
      <Routes>
        <Route path='/' element={<Inicio pasarObjetos={pasarObjetos}/>}/>
        <Route path='/manga' element={<TarjetaDetallada objetoM={mObj} pasarValorBoton={pasarValorBoton}/>}/>
        <Route path='/filtro' element={<Filtro valorDelBoton={valorBoton}/>}/>
        <Route path={ruta} element={<Filtro valorDelBoton={valorBoton} pasarObjetos={pasarObjetos}/> }/>
        <Route path='/mangaId' element={<TarjetaDetallada objetoM={mangaFull}/>}/>
      </Routes>
      

    </div>
  )
}

export default App
