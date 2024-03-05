/**
 * Es el detalle donde se muestra cada mascota particular
 * @author Miguel Arturo Reina
 */
import { useParams } from "react-router-dom";

const { useEffect, useState} = require("react");

function Detail() {
  const params = useParams();
  // Traer las mascotas
  const [mascotas, setMascotas] = useState([]);
  useEffect(() => {
    const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL)
        .then((data) => data.json())
        .then((data) => {
            setMascotas(data);
        })
        
    }, []);


    // Encontrar cuál es la mascota particular para desplegar su detalle.
    // Se separa el hook de efecto para evitar errores (warnings)
    const [mascotaParticular, setMascotaParticular] = useState(params.mascotaId);
    useEffect(() => {
      // mascotas.length asegura que se cargó el listado
      if(mascotas.length > 0 && params.mascotaId) {
        const mascotaEncontrada = mascotas.find(mascota => mascota.id === parseInt(params.mascotaId));
        if (mascotaEncontrada){
          setMascotaParticular(mascotaEncontrada);
        }
      }
    }, [mascotas, params.mascotaId]);


  return (
    <div>
      
      <h2>{mascotaParticular.nombre}</h2>
      <img src={mascotaParticular.foto} alt={mascotaParticular.descripcion}/>
      <h4>{mascotaParticular.raza}</h4>
    </div>
  );
}

export default Detail;