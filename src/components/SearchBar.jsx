import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import SearchItems from './SearchItems'
import useSearches from '../hooks/useSearches'
import useFilteredSearches from '../hooks/useFilteredSearches'
import GenreSelector from './GenreSelector'
import './SearchBar.css'

function SearchBar ({showResults = true }) {
  const [query, setQuery] = useState('')
  const { type: initialType } = useParams()
  const location = useLocation()
  const showFilters = location.pathname !== '/'
  const canChoose = !location.pathname.includes('details')
  const [type, setType] = useState(initialType ? initialType : 'movie')
  const { searches } = useSearches(query, type)
  const [filter, setFilter] = useState('')


  const { filteredSearches } = useFilteredSearches(searches, filter)

  return (
    <>
    
    <nav className='header-nav'>
      <div className='links-container'>
        <Link to='/' className='header-link'>Home</Link>
      </div>
      <div className='input-container'>

        {
          canChoose
            ? <select className='select-type' name='type' id='type' onChange={(e) => { setType(e.target.value) }}>
              <option value='movie'>Movies</option>
              <option value='tv'>TV Shows</option>
              <option value='person'>Persons</option>
              </select>
            : null
      }
        {
        showFilters && type !== 'person'
          ? <GenreSelector type={type} setFilter={setFilter} />
          : null
      }
        <input
          className='input-search' onChange={(event) => {
            setQuery(event.target.value)
          }}
        />

      </div>
    </nav>
      {
        showResults
          ? <SearchItems type={type} searches={filteredSearches} />
          : null
      }
    </>

  )
}

export default SearchBar
