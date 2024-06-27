import axiosDetails from './detailsInstance.js'

async function getDetails (type, searchQuery) {
  const params = new URLSearchParams(searchQuery)
  const search = await axiosDetails.get(`${type}?${params.toString()}`)
  return search
}

export default getDetails
