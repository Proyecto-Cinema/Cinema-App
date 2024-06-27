import axiosDiscover from './detailsInstance.js'

async function getDiscover (type, searchQuery) {
  const params = new URLSearchParams(searchQuery)
  const search = await axiosDetails.get(`${type}?${params.toString()}`)
  return search
}

export default getDiscover
