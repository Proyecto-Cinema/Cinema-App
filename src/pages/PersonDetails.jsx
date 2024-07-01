import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./DetailsGeneralStyles.css";
import "./PersonDetails.css";
import Person from "../components/Person";
import getDiscover from "../services/getDiscover";

function PersonDetails({ details, type }) {
  /* console.log("person details: ", details); */

  const [mostPopularPeople, setMostPopularPeople] = useState([]);

  useEffect(() => {
    const searchPopularPeople = async () => {
      try {
        const { data } = await getDiscover("person", {
          page: 1,
        });
        const people = data.results.slice(0, 8);
        console.log(data);
        setMostPopularPeople(people);
      } catch (error) {console.log(error)}
    };

    searchPopularPeople();
  }, []);

  return (
    <div className="container">
      <h2 className="title">{details.name}</h2>
      <div className="container-img">
        <img
          className="imagen"
          src={`https://image.tmdb.org/t/p/w500${details.profile_path}`}
          alt={details.name}
        />
        <div className="info-container">
          <div className="person-info">
            <p>{details.biography}</p>
          </div>
          {!details.birthday ? (
            <p className="info-text">no definido</p>
          ) : details.deathday ? (
            <p className="info-text">
              {details.birthday} - {details.deathday}
            </p>
          ) : (
            <p className="info-text">{details.birthday} - Actualidad</p>
          )}

          <p className="info-text"> {details.place_of_birth}</p>
        </div>
      </div>
      <div className="contenedor-personas-relacionadas">
        <h1 className="info-text">You might also like</h1>
        <div className="principal-contenedor-recomendaciones">
          {mostPopularPeople.map((person) => (
            <Person
              key={person.id}
              imageFilePath={person.profile_path}
              personName={person.name}
              valoratePerson={person.popularity}
              id={person.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
