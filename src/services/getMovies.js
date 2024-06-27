import axiosMovies from './instance.js';

async function getSearch(type, searchQuery){
  const params = new URLSearchParams(searchQuery);
  const movies = await axiosMovies.get(`/search/${type}?${params.toString()}`)
  return movies
}

export default getSearch
