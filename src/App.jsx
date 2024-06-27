import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import getSearch from './services/getMovies'
import './App.css'
import PaginaPrincipal from './contenedores/PaginaPrincipal'
import Peliculas from './contenedores/Apartado de peliculas'
/* import { useGlobalState } from './context/GlobalState' */

function App () {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await getSearch('tv', {
          query,
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
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/Peliculas'>Peliculas</Link>
      <Routes>
        <Route path='/' element={<PaginaPrincipal />}>Home</Route>
        <Route path='/peliculas' element={<Peliculas />} />
        <Route path='/about' element={<h1>About</h1>}>About</Route>
      </Routes>
    </div>

  )
}

export default App
