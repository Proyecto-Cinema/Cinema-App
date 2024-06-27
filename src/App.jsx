import { useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'

function App () {
  const [search, setSearch] = useState([])

  console.log(search)

  return (
      <SearchBar showFilters={true} setOutsideSearch={setSearch} showResults={false} />
  )
}

export default App
