import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  //const [images, setimages] = useState([]);
  const { data:images, loading } = useFetchGifs( category );//data:images, haciendo así cambiamos el nombre de data a images.
  //useEffect( () => {
    //  getGifs( category )
      //  .then( imgs => setimages( imgs ));
  //}, [ category  ])*/


  return (
    <>
      <h3 className='animate__backInDown'>{ category }</h3>
      
      { loading && <p >Loading</p>} {/* para evitar usar un operador ternario (ya que no queremos que haga nada si la condición no se cumple, usamos &&, que solo hace algo si es verdadera la condición) */}

      <div className='card-grid'>
        {
          images.map( img => (
            <GifGridItem 
                key={ img.id }
                {...img}
                /* o podemos poner así:
                url={ img.url }
                title={ img.title }*/ />
          ))
        }
        
      </div>
    </>
    
  )
}
