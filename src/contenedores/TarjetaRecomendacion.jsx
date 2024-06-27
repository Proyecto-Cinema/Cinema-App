import React from 'react'
import '../styles/TarjetaRecomendacion.css'
import starImage from '../imgs/star-symbol-icon.png' // Importa la imagen de la ruta correspondiente
import { Link } from 'react-router-dom' // Importa el componente Link de react-router-dom

// Las tarjetas de recomendación para cada pelicula
function TarjetaRecomendacion ({ rating, imgPath, alt, title, type, id, pag }) {
  return (
    <div className={`contenedor-pelicula${pag === 'apart' ? '-apartado' : ''}`.trimEnd()}>
      <img className='imagen-tarjeta' src={imgPath} alt={alt} />
      <div className='contenedor-pelicula_informacion'>
        <div className='contenedor-rating'>
          <img className='rating-img' src={starImage} alt='rating' />
          {/* Usa la imagen importada */}
          <p className='rating-text'>{rating}</p>
        </div>
        <h1 className='title-text'>{title}</h1>
        <Link to={`${type}/${id}`} className='trailer-link'>Trailer</Link>
      </div>
    </div>
  )
}

export default TarjetaRecomendacion
