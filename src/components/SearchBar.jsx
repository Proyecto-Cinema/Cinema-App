import { useState } from 'react'
import SearchItem from './SearchItem'
import useSearches from '../hooks/useSearches'
import GenreSelector from './GenreSelector'
import './SearchBar.css'

function SearchBar ({ canChoose = true, initialType = 'movie', showResults = true, showFilters = false, setOutsideSearch = null }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState(initialType)
  const [filters, setFilters] = useState([])
  const { searches, error } = useSearches(query, type, filters)

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
          ? <div className='search-container'>
            {
              !error
                ? searches.map((searchItem) => {
                  return (
                    <SearchItem searchItem={searchItem} key={searchItem.id} type={type} />
                  )
                })
                : <div>error</div>
          } </div>
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
