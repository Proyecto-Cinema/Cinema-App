import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getSearch from '../services/getSearch'
import './SearchBar.css'

const moviesGenres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]

const tvGenres = [
  {
    "id": 10759,
    "name": "Action & Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 10762,
    "name": "Kids"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10763,
    "name": "News"
  },
  {
    "id": 10764,
    "name": "Reality"
  },
  {
    "id": 10765,
    "name": "Sci-Fi & Fantasy"
  },
  {
    "id": 10766,
    "name": "Soap"
  },
  {
    "id": 10767,
    "name": "Talk"
  },
  {
    "id": 10768,
    "name": "War & Politics"
  },
  {
    "id": 37,
    "name": "Western"
  }
]

function SearchBar ({ canChoose = true, initialType = 'movie', showResults = true, showFilters = false, setOutsideSearch = null }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState(initialType)
  const [searches, setSearches] = useState([])
  const [filters, setFilters] = useState([])
  const [filteredSearches, setFilteredSearches] = useState([])
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
        if(setOutsideSearch) {
          if(filters.length !== 0) {
            setOutsideSearch(search.filter((item) => {
              if(type === 'movie') {
                return item.genre_ids.some((genre) => filters.includes(genre))
              }
              else if (type === 'tv') {
                return item.genre_ids.some((genre) => filters.includes(genre))
              }
              else if (type === 'person') {
                return filters.includes(item.gender)
              }
            })
          )
          }
          else {
            setOutsideSearch(search)
          }
        }
      } catch {
        setError(true)
      }
    }
    search()
  }, [query, type, filters])

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
                  <Link to={`/${type}/details/${searchItem.id}`}>
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
      {
        showFilters
          ? <select onChange={(e) => setFilters(e.target.value)} className='filter-container'>
            {
              type === 'movie'
                ? <>
                  <option value=''>All Genres</option>
                  {
                    moviesGenres.map((genre) => {
                      return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })
                  }
                </>
                : null
            }
            {
              type === 'tv'
                ? <>
                  <option value=''>All Genres</option>
                  {
                    tvGenres.map((genre) => {
                      return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })
                  }
                </>
                : null
            }
            {
              type === 'person'
                ? <>
                  <option value=''>All</option>
                  <option value="1">Women</option>
                  <option value="2">Men</option>
                </>
                : null
            }
          </select>
          : null
      }

    </nav>

  )
}

export default SearchBar
