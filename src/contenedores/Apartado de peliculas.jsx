import React, { useEffect, useState } from 'react'
import '../styles/Peliculas.css'
import TarjetaRecomendacion from './TarjetaRecomendacion'
import getSearch from '../services/getMovies'
import Filter from './filters'

const List = [
  'Accion', 'Aventura', 'Animacion', 'Comedia', 'Crimen', 'Documental', 'Drama', 'Familiar',
  'Fantasia', 'Historia', 'Terror', 'Musica', 'Misterio', 'Romance',
  'Ciencia Ficcion', 'Pelicula de TV', 'Suspenso', 'Guerra', 'Western (Vaqueros)']

const List2 = [
  'Accion y Aventura', 'Animacion', 'Comedia', 'Crimen', 'Documental', 'Drama', 'Familiar', 'Infantil', 'Misterio', 'Noticias', 'Realidad',
  'Ciencia Ficcion y fantasia', 'Telenovela', 'Charla (Talk show)', 'Guerra y politica', 'Western (Vaqueros)']

function Peliculas () {
  const [mostPopularMovies, setMostPopularMovies] = useState([])

  useEffect(() => {
    const search = async (queryLine) => {
      try {
        const { data } = await getSearch('tv', {
          query: queryLine,
          page: 1
        })
        const movies = data.results.slice(0, 21)

        console.log(movies)
        setMostPopularMovies(movies)
      } catch (error) {
        console.log('Error', error)
      }
    }

    search('popular')
  }, [])

  return (
    <div className='contenedor-peliculas-apartado'>
      <h1>Peliculas</h1>
      <div className='principal-peliculas'>
        {mostPopularMovies.map((movie) => (
          <TarjetaRecomendacion
            key={movie.id}
            title={movie.title || movie.name || 'Un título'}
            rating={movie.vote_average || 5}
            imgPath={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title || movie.name || 'Película'}
            type='movies'
            id='1234'
            pag='apart'
          />
        ))}
      </div>
      <div className='filtro-apartado'>
        <div className='filtro-lista'>
          <ul>
            <li>
              <h1>Generos pelicula</h1>
            </li>
            <Filter element={List} />
            <li>
              <h1>Generos Series de TV</h1>
            </li>
            <Filter element={List2} />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Peliculas
