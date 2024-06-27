import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import getSearch from './services/getMovies'
import './App.css'

function App () {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await getSearch("tv", {
          query: query,
          page: 1
        })
        const movies = data.results

        setMovies(movies)
      } catch {
        setError(true)
      }
    }
    search()
  }, [query])

  console.log(movies)

  return (

    <div>
      <input onChange={(event) => {
        setQuery(event.target.value)
      }}></input>
      <div className="movies-container">
        {
          !error ? movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}  />
              </Link>
            </div>
          )
        })
          : <div>error</div>
        }
      </div>
    </div>

  )
}

export default App
