import ReactStars from 'react-rating-stars-component'


const mockResponse = {
    
        "adult": false,
        "backdrop_path": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
        "belongs_to_collection": {
          "id": 173710,
          "name": "Planet of the Apes (Reboot) Collection",
          "poster_path": "/afGkMC4HF0YtXYNkyfCgTDLFe6m.jpg",
          "backdrop_path": "/2ZkvqfOJUCINozB00wmYuGJQW81.jpg"
        },
        "budget": 160000000,
        "genres": [
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 28,
            "name": "Action"
          }
        ],
        "homepage": "https://www.20thcenturystudios.com/movies/kingdom-of-the-planet-of-the-apes",
        "id": 653346,
        "imdb_id": "tt11389872",
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_title": "Kingdom of the Planet of the Apes",
        "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
        "popularity": 2140.845,
        "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        "production_companies": [
          {
            "id": 127928,
            "logo_path": "/h0rjX5vjW5r8yEnUBStFarjcLT4.png",
            "name": "20th Century Studios",
            "origin_country": "US"
          },
          {
            "id": 133024,
            "logo_path": null,
            "name": "Oddball Entertainment",
            "origin_country": "US"
          },
          {
            "id": 89254,
            "logo_path": null,
            "name": "Jason T. Reed Productions",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          {
            "iso_3166_1": "US",
            "name": "United States of America"
          }
        ],
        "release_date": "2024-05-08",
        "revenue": 385621784,
        "runtime": 145,
        "spoken_languages": [
          {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
          }
        ],
        "status": "Released",
        "tagline": "No one can stop the reign.",
        "title": "Kingdom of the Planet of the Apes",
        "video": false,
        "vote_average": 6.87,
        "vote_count": 1235
      
  }
  function MovieInformation () {
    return (
    <div className='container'>
      <h2 className='title'>{mockResponse.title}</h2>
        <div className= 'container-img'>
          <img className="imagen"src={`https://image.tmdb.org/t/p/w500${mockResponse.poster_path}`} alt={mockResponse.title} />
            <div className="info">
              <p>{mockResponse.overview}</p>
              <p>Fecha e lanzamiento: <strong>{mockResponse.release_date}</strong></p>
              <p>{` ⭐${mockResponse.vote_average}`}</p>
              <ReactStars value={(mockResponse.vote_average)/2} edit={false} size={40}/>  
              <div className="genres">
                {mockResponse.genres.map((genre) => {
                return (
                <p className="genreStyle">{genre.name}</p>
                )})}   
              </div>
              <div className="production">
                {mockResponse.production_companies.map((company) => {
                return (
                <p className="companyStyle">{company.name}</p>)
                })}
              </div>
            </div>
        </div>           
    </div>
    )
  }

  export default MovieInformation



