import { Routes, Route } from 'react-router-dom'
import DetailsInformation from './pages/DetailsInformation'
import './App.css'
import PaginaPrincipal from './pages/Home'

function App () {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<PaginaPrincipal />} />
          <Route path='/details/:type/:id' element={<DetailsInformation />} />
        </Routes>
      </div>
    </>
  )
}

export default App
