import React, { useEffect, useState } from "react";
import "./ContenidosRelacionados.css";
import getSimilar from "../services/getSimilar";
import getDiscover from "../services/getDiscover";
import TarjetaRecomendacion from "./TarjetaRecomendacion";

function ContenidosRelacionados({ type, id }) {
  const [similarContent, setSimilarContent] = useState([]);
  const [popularContent, setPopularContent] = useState([]);

  useEffect(() => {
    const searchSimilar = async () => {
      try {
        const { data } = await getSimilar(type, id);
        setSimilarContent(data.results);
        if (data.results.length === 0) {
          const popularData = await getDiscover(type, { page: 1 });
          setPopularContent(popularData.data.results.slice(0, 15));
        }
      } catch (error) {
        console.error('Error fetching similar content:', error);
      }
    };

    searchSimilar();
  }, [id, type]);

  return (
    <div className="contenedor-principal">
      <h1>{similarContent.length > 0 ? "Contenido Relacionado" : "Contenido Popular (no se encontró relacionado)"}</h1>
      <div className="principal-contenedor-recomendaciones">
        {similarContent.length > 0 ? (
          similarContent.map((movie) => (
            <TarjetaRecomendacion
              key={movie.id}
              title={movie.title || movie.name || "Un título"}
              rating={movie.vote_average || 5}
              imgPath={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title || movie.name || "Película"}
              type={type}
              id={movie.id}
            />
          ))
        ) : (
          popularContent.map((content) => (
            <TarjetaRecomendacion
              key={content.id}
              title={content.title || content.name || "Un título"}
              rating={content.vote_average || 5}
              imgPath={`https://image.tmdb.org/t/p/w200${content.poster_path}`}
              alt={content.title || content.name || "Película"}
              type={type}
              id={content.id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ContenidosRelacionados;