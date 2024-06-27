import './App.css'
import { useGlobalState } from './context/GlobalState'

function App () {
  const { estadoPrueba, setEstadoPrueba } = useGlobalState() /* Los estados se importan del contexto */

  return (

    <div>
      <h1>{estadoPrueba ? 'Estoy activo' : 'Estoy inactivo'}</h1>
      <button onClick={() => {
        setEstadoPrueba(!estadoPrueba)
        console.log(estadoPrueba)
      }}
      >Cambia estado
      </button>
    </div>

  )
}

export default App
