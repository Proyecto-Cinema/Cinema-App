import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import './App.css'
import PaginaPrincipal from './contenedores/PaginaPrincipal'
/* import { useGlobalState } from './context/GlobalState' */

function App () {
  const [search, setSearch] = useState([])

  console.log(search)

  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Routes>
          <Route path='/' element={<PaginaPrincipal />}>Home</Route>
          <Route path='/about' element={<h1>About</h1>}>About</Route>
        </Routes>
      </div>
    </>
  )
}

export default App
