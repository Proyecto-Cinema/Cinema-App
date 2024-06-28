import './Person.css'
import { Link } from 'react-router-dom'

function Person ({ id, imageFilePath, personName, valoratePerson }) {
  return (
    <Link to={`/person/details/${id}`} className='person-container'>
      <img className='person-img' src={`https://image.tmdb.org/t/p/w200${imageFilePath}`} alt={personName} />
      <div className='information-container'>
        <div className='rating'>
          <p className='rating-text'>{valoratePerson}</p>
        </div>
        <h4 className='title-text'>{personName}</h4>
      </div>
    </Link>
  )
};

export default Person
