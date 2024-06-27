import { useState } from 'react'
import './App.css'
import { GlobalProvider } from './context/GlobalState'

function App () {
  const [estadoPrueba, setEstadoPrueba] = useState(true) /* Los estados se importan del contexto */

  return (
    <GlobalProvider>
      <div>
        <h1>{estadoPrueba}</h1>
        <button onClick={() => {
          setEstadoPrueba(!estadoPrueba)
          console.log(estadoPrueba)
        }}
        >Cambia estado
        </button>
      </div>
    </GlobalProvider>
  )
}

export default App
