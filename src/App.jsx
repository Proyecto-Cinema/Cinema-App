import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import DetailsInformation from './components/DetailsInformation'
import './App.css'
import PaginaPrincipal from './contenedores/PaginaPrincipal'
/* import { useGlobalState } from './context/GlobalState' */

function App () {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<PaginaPrincipal />}></Route>
          <Route path='/:type/details/:id' element={<DetailsInformation />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
