import "./App.css";
import { useGlobalState } from "./context/GlobalState";

function App() {

  return (
      <div className="main-page">
        <header className="header">
          BootCamp
          <input type="text" placeholder="Ingrese el contenido" />
        </header>
        <div className="movies">
          <h2>Top 5 peliculas de la semana</h2>
          <div className="movies-row">
            <div>
              <img src="" alt="pelicula1" />
            </div>
            <div>
              <img src="" alt="pelicula2" />
            </div>
            <div>
              <img src="" alt="pelicula3" />
            </div>
            <div>
              <img src="" alt="pelicula4" />
            </div>
            <div>
              <img src="" alt="pelicula5" />
            </div>
          </div>
        </div>
        <div className="shows">
          <h2>Series mas populares</h2>
          <div className="shows-row">
            <div>
              <img src="" alt="serie" />
            </div>
            <div>
              <img src="" alt="serie2" />
            </div>
            <div>
              <img src="" alt="serie3" />
            </div>
            <div>
              <img src="" alt="serie4" />
            </div>
            <div>
              <img src="" alt="serie5" />
            </div>
          </div>
        </div>
        <div className="people">
          <h2>Famosos</h2>
          <div className="people-row">
            <div>
              <img src="" alt="persona1" />
              <p>nombre</p>
            </div>
            <div>
              <img src="" alt="persona2" />
              <p>nombre</p>
            </div>
            <div>
              <img src="" alt="persona3" />
              <p>nombre</p>
            </div>
            <div>
              <img src="" alt="persona4" />
              <p>nombre</p>
            </div>
            <div>
              <img src="" alt="persona5" />
              <p>nombre</p>
            </div>
          </div>
        </div>
        <footer className="icons">
          <div>
        icono
          </div>
          <div>
        icono
          </div>
          <div>
        icono
          </div>
        </footer>
      </div>
  );
}

export default App;
