import { Routes, Route } from 'react-router-dom'
import DetailsInformation from './pages/DetailsInformation'
import './App.css'
import PaginaPrincipal from './pages/Home'
import SearchBar from './components/SearchBar'

function App () {
  return (
    <>
      <div>
        <SearchBar />
        <Routes>
          <Route path='/' element={<PaginaPrincipal />} />
          <Route path='/details/:type/:id' element={<DetailsInformation />} />
        </Routes>
      </div>
    </>
  )
}

export default App
