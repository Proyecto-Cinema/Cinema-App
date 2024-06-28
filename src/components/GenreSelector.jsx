import { MOVIE_GENRES, TV_GENRES } from '../constants/genres'

const GenreSelector = ({ type, setFilters }) => {
  const genres = type === 'movie' ? MOVIE_GENRES : TV_GENRES
  return (
    <select onChange={(e) => setFilters(e.target.value)} className='filter-container'>
      <option value=''>All Genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
    </select>
  )
}

export default GenreSelector
