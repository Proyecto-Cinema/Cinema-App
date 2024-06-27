import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
/* import { useGlobalState } from './context/GlobalState' */

function App () {
  /* const { estadoPrueba, setEstadoPrueba } = useGlobalState()  *//* Los estados se importan del contexto */

  return (

    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}>Home</Route>
        <Route path='/about' element={<h1>About</h1>}>About</Route>
      </Routes>
    </div>

  )
}

export default App
