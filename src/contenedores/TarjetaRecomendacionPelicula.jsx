import React from 'react'
import '../styles/TarjetaRecomendacionPelicula.css'
import starImage from '../imgs/star-symbol-icon.png' // Importa la imagen de la ruta correspondiente

// Las tarjetas de recomendación para cada pelicula
function TarjetaRecomendacionPelicula ({ rating, imgPath, alt, title }) {
  return (
    <div className='contenedor-pelicula'>
      <img className='imagen-tarjeta' src={imgPath} alt={alt} />
      <div className='contenedor-informacion-pelicula_informacion'>
        <div>
          <div className='contenedor-rating'>
            <img className='rating-img' src={starImage} alt='rating' />{' '}
            {/* Usa la imagen importada */}
            <p>{rating}</p>
          </div>
          <h1>{title}</h1>
          <p>Play</p>
        </div>
      </div>
    </div>
  )
}

export default TarjetaRecomendacionPelicula
