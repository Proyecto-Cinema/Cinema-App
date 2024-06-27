import React, { useEffect, useState } from 'react'
import '../styles/PaginaPrincipal.css'
import TarjetaRecomendacion from './TarjetaRecomendacion'
import getSearch from '../services/getMovies'

function PaginaPrincipal () {
  const [mostPopularMovies, setMostPopularMovies] = React.useState([])
  const [mostPopularTvShows, setMostPopularTvShows] = useState([])

  useEffect(() => {
    const search = async (queryLine) => {
      try {
        const { data } = await getSearch('tv', {
          query: queryLine,
          page: 1
        })
        const movies = data.results.slice(0, 5)

        console.log(movies)
        setMostPopularMovies(movies)
      } catch (error) {
        console.log('Error', error)
      }
    }

    search('popular')
  }, [])

  return (
    <div className='contenedor-principal'>
      <h1>Peliculas populares</h1>

      <div className='principal-contenedor-recomendaciones'>
        {mostPopularMovies.map((movie) => (
          <TarjetaRecomendacion
            key={movie.id} // Añadir una clave única para cada elemento
            title={movie.title || movie.name || 'Un título'}
            rating={movie.vote_average || 5}
            imgPath={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} // Solicitar la imagen correcta
            alt={movie.title || movie.name || 'Película'}
          />
        ))}

      </div>

      <h1>Series mas populares</h1>
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
