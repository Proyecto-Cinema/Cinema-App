import React, { useEffect, useState } from 'react'
import '../styles/PaginaPrincipal.css'
import TarjetaRecomendacion from './TarjetaRecomendacion'
import getSearch from '../services/getMovies'

function PaginaPrincipal () {
  const [mostPopularMovies, setMostPopularMovies] = useState([])

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
            key={movie.id}
            title={movie.title || movie.name || 'Un título'}
            rating={movie.vote_average || 5}
            imgPath={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title || movie.name || 'Película'}
            type='movies'
            id='1234'
          />
        ))}

      </div>

      <div>
        <h1>Series mas populares</h1>
        <div className='principal-contenedor-recomendaciones'>
          {mostPopularMovies.map((movie) => (
            <TarjetaRecomendacion
              key={movie.id}
              title={movie.title || movie.name || 'Un título'}
              rating={movie.vote_average || 5}
              imgPath={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title || movie.name || 'Película'}

            />
          ))}
        </div>
      </div>

      <h1>Famosos más populares</h1>

    </div>
  )
}

export default PaginaPrincipal
