import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getSearch from '../services/getMovies'
import './SearchBar.css'

function SearchBar ({ canChoose = true, initialType = 'movie', showResults = true }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState(initialType)
  const [searches, setSearches] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await getSearch(type, {
          query,
          page: 1
        })
        const search = data.results

        setSearches(search.slice(0, 8))
      } catch {
        setError(true)
      }
    }
    search()
  }, [query, type])

  const returnName = (searchItem) => {
    if (type === 'movie') return searchItem.original_title
    else if (type === 'tv') return searchItem.original_name
    else if (type === 'person') return searchItem.original_name
  }

  const returnImage = (searchItem) => {
    if (searchItem.poster_path) return `https://image.tmdb.org/t/p/w500${searchItem.poster_path}`
    else if (searchItem.profile_path) return `https://image.tmdb.org/t/p/w500${searchItem.profile_path}`
    else return 'https://th.bing.com/th/id/OIP.iEE5Pq8P83xrKvMzG3g4GQE8DF?rs=1&pid=ImgDetMain'
  }

  return (

    <nav className='header-nav'>
      {
          canChoose
            ? <select
                className='select-type' name='type' id='type' onChange={(e) => {
                  setType(e.target.value)
                }}
              >
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
                <div className='search' key={searchItem.id}>
                  <Link to={`/${type}/${searchItem.id}`}>
                    <img
                      onError={(e) => {
                        e.target.src = 'https://th.bing.com/th/id/OIP.iEE5Pq8P83xrKvMzG3g4GQE8DF?rs=1&pid=ImgDetMain'
                      }} src={`https://image.tmdb.org/t/p/w500${returnImage(searchItem)}`} alt={returnName(searchItem)}
                    />
                    <p>
                      {
                    returnName(searchItem)
                  }
                    </p>
                  </Link>
                </div>
              )
            })
            : <div>error</div>
        }
          </div>
          : null
      }

    </nav>

  )
}

export default SearchBar
