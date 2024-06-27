import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/personas.css"

const Person = () => {
  const [imageFilePath, setImageFilePath] = useState('');
  const [personName, setPersonName] = useState('');
  const [ValoratePerson , setValoratePerson ] = useState ('');
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const images = await axios.get('https://api.themoviedb.org/3/person/12835/images');
        setImageFilePath(images.data.profiles[0].file_path);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
fetchData()} )
  return (
    <div className='container'>
    <div className='circular-effect'>
    <div className='container-imagen' >
      <img className='profiles' src={`https://image.tmdb.org/t/p/w500${imageFilePath}`} />
    </div>
    </div>
    <div className='information'>
    <div className='Valoracion'>
      ValoratePerson
    <div className='Nombre'>
      personName
    </div>
    </div>
    </div>
    </div>
  );
};

export default Person;