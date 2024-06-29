import { useState, useEffect } from 'react'
import getSearch from '../services/getSearch'

function useSearches (query, type) {
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

        setSearches(search.slice(0, 6))
      } catch {
        setError(true)
      }
    }
    search()
  }, [query, type])

  return { searches, error, setSearches }
}

export default useSearches
