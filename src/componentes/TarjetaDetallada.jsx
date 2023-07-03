
import { Link } from "react-router-dom";

export function TarjetaDetallada({ objetoM, pasarValorBoton }) {

  return (
    <div>
      <h1>{objetoM?.title}</h1>
      <h3>({objetoM?.title_japanese})</h3>
      <p>{objetoM?.synopsis}</p>
      <ul>
        {objetoM?.authors?.map((obj) => (
          <h1 key={obj?.mal_id}>{obj?.name}</h1>
        ))}
      </ul>

      
        {objetoM?.genres?.map((obj) => (
          <li key={obj?.mal_id}>
            <Link to="/filtro">
              <button
                value={obj.name}
                onClick={(e) => {
                    pasarValorBoton(e.target.value);
                }}
              >
                {obj.name}
              </button>
            </Link>
            
          </li>
        ))}
      

      <img src={objetoM?.images?.jpg.image_url} alt="imagen manga" />
    </div>
  );
}
