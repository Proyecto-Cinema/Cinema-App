import "./personas.css"
import { Link } from 'react-router-dom'

function Person ({ id, imageFilePath, personName, ValoratePerson }) {
  
  return (
    <Link to={`/person/details/${id}`} className='container'>
    <div className='circular-effect'>
    <div className='container-imagen' >
      <img className='profiles' src={`https://image.tmdb.org/t/p/w500${imageFilePath}`} />
    </div>
    </div>
    <div className='information'>
    <div className='Valoracion'>
      {
        ValoratePerson
      }
    <div className='Nombre'>
      {
        personName
      }
    </div>
    </div>
    </div>
    </Link>
  );
};

export default Person;