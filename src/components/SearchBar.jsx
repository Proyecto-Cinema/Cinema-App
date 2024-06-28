import { useState } from 'react'
import SearchItems from './SearchItems'
import useSearches from '../hooks/useSearches'
import useFilteredSearches from '../hooks/useFilteredSearches'
import GenreSelector from './GenreSelector'
import './SearchBar.css'

function SearchBar ({ canChoose = true, initialType = 'movie', showResults = true, showFilters = false }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState(initialType)
  const { searches } = useSearches(query, type)
  const [filters, setFilters] = useState([])

  const { filteredSearches } = useFilteredSearches(searches, filters)

  return (

    <nav className='header-nav'>
      {
          canChoose
            ? <select className='select-type' name='type' id='type' onChange={(e) => { setType(e.target.value) }}>
              <option value='movie'>Movies</option>
              <option value='tv'>TV Shows</option>
              <option value='person'>Persons</option>
              </select>
            : null
      }
      <input
        className='input-search' onChange={(event) => {
          setQuery(event.target.value)
        }}
      />
      {
        showResults
          ? <SearchItems type={type} searches={filteredSearches} />
          : null
      }
      {
        showFilters && type !== 'person'
          ? <GenreSelector type={type} setFilters={setFilters} />
          : null
      }

    </nav>

  )
}

export default SearchBar
