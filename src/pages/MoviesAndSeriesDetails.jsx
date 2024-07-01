import React from "react";
import ReactStars from "react-rating-stars-component";
import "./DetailsGeneralStyles.css";
import ContenidosRelacionados from "../components/ContenidosRelacionados";

function MoviesAndSeriesDetails({ details, type }) {
  return (
    <div className="container">
      <h2 className="title">{details.title}</h2>
      <div className="container-img">
        <img
          className="imagen"
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title}
        />
        <div className="info">
          <p>{details.overview}</p>
          <p>
            Fecha e lanzamiento: <strong>{details.release_date}</strong>
          </p>
          <p>{` ⭐${details.vote_average}`}</p>
          <ReactStars value={details.vote_average / 2} edit={false} size={40} />
          <div className="tags-container">
            <div className="genres">
              {details.genres.map((genre) => {
                /* console.log("genre: ", genre); */
                return (
                  <p key={genre.id} className="genreStyle">
                    {genre.name}
                  </p>
                );
              })}
            </div>
            <div className="production">
              {details.production_companies.map((company) => {
                // console.log(company.id)
                return (
                  <p key={company.id} className="companyStyle">
                    {company.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ContenidosRelacionados type={type} id={details.id} />
    </div>
  );
}

export default MoviesAndSeriesDetails;
