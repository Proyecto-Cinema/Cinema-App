import React from 'react'
import '../styles/PaginaPrincipal.css'
import TarjetaRecomendacion from './TarjetaRecomendacion'

function PaginaPrincipal () {
  return (
    <div className='contenedor-principal'>
      <h1>Peliculas populares</h1>
      <div className='principal-contenedor-recomendaciones'>
        <TarjetaRecomendacion title='Un titulo' rating={5} imgPath='https://picsum.photos/200/300' alt='Pelicula 1' />
        <TarjetaRecomendacion title='Un titulo' rating={4} imgPath='https://picsum.photos/200/300' alt='Pelicula 2' />
        <TarjetaRecomendacion title='Un titulo' rating={3} imgPath='https://picsum.photos/200/300' alt='Pelicula 3' />
        <TarjetaRecomendacion title='Un titulo' rating={2} imgPath='https://picsum.photos/200/300' alt='Pelicula 4' />
        <TarjetaRecomendacion title='Un titulo' rating={1} imgPath='https://picsum.photos/200/300' alt='Pelicula 5' />
      </div>

      <h1>Series mas populares populares</h1>
      <div className='principal-contenedor-recomendaciones'>
        <TarjetaRecomendacion title='Un titulo' rating={5} imgPath='https://picsum.photos/200/300' alt='Pelicula 1' />
        <TarjetaRecomendacion title='Un titulo' rating={4} imgPath='https://picsum.photos/200/300' alt='Pelicula 2' />
        <TarjetaRecomendacion title='Un titulo' rating={3} imgPath='https://picsum.photos/200/300' alt='Pelicula 3' />
        <TarjetaRecomendacion title='Un titulo' rating={2} imgPath='https://picsum.photos/200/300' alt='Pelicula 4' />
        <TarjetaRecomendacion title='Un titulo' rating={1} imgPath='https://picsum.photos/200/300' alt='Pelicula 5' />
      </div>

      <h1>Famosos más populares</h1>

    </div>
  )
}

export default PaginaPrincipal
