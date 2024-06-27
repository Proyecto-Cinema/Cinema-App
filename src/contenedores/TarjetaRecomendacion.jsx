import React from 'react'
import '../styles/TarjetaRecomendacion.css'
import starImage from '../imgs/star-symbol-icon.png' // Importa la imagen de la ruta correspondiente

// Las tarjetas de recomendación para cada pelicula
function TarjetaRecomendacion ({ rating, imgPath, alt, title }) {
  return (
    <div className='contenedor-pelicula'>
      <img className='imagen-tarjeta' src={imgPath} alt={alt} />
      <div className='contenedor-pelicula_informacion'>
        <div className='contenedor-rating'>
          <img className='rating-img' src={starImage} alt='rating' />{' '}
          {/* Usa la imagen importada */}
          <p className='rating-text'>{rating}</p>
        </div>
        <h1 className='title-text'>{title}</h1>
        <button className='play-button'>Trailer</button>
      </div>
    </div>
  )
}

export default TarjetaRecomendacion
