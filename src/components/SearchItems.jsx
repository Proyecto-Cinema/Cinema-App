import SearchItem from './SearchItem'

function SearchItems ({ searches, type }) {
  return (
    <div className='search-container'>
      {
          searches.map((searchItem) => {
            return (
              <SearchItem searchItem={searchItem} key={searchItem.id} type={type} />
            )
          })
        }
    </div>
  )
}

export default SearchItems
