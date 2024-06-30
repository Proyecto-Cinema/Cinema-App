import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import getDetails from "../services/getDetails";
import { useParams } from "react-router-dom";
import MoviesAndSeriesDetails from "./MoviesAndSeriesDetails";
import PersonDetails from "./PersonDetails";

function DetailsInformation() {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        console.log("type: ", type, "id: ", id);
        const { data } = await getDetails(type, id);
        /* console.log("data: ", data); */
        setDetails(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDetails();
  }, [id, type]);
  

  /* console.log("type: ", type, "id: ", id); */

  return (
    <>
      <SearchBar showFilters />
      {!details ? (
        <div>Loading...</div>
      ) : type === 'person' ? (
        <PersonDetails details={details} type={type} />
      ) : (
        details.genres && <MoviesAndSeriesDetails details={details} type={type} /> 
        /* Se pregunta si existen details.genres para evitar mostrar un error al tratar de 
        cargar una persona en una vista de series */
      )}
    </>
  );
}

export default DetailsInformation;
