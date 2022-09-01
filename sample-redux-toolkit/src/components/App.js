import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsFromAPI } from "../features/films/filmsSlice";
import attackClones from "../assets/attack-clones.jpg";
import newHope from "../assets/new-hope.jpg";
import empiresStrikesBack from "../assets/empire-strikes-back.jpg";
import phantomMenace from "../assets/phantom-menace.jpg";
import returnOfJedi from "../assets/return-of-jedi.jpg";
import revengeSith from "../assets/revenge-sith.jpg";
import "../styles/app.css";

const App = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.data);

  const filmsCovers = {
    1: phantomMenace,
    2: attackClones,
    3: revengeSith,
    4: newHope,
    5: empiresStrikesBack,
    6: returnOfJedi,
  };

  useEffect(() => {
    dispatch(fetchFilmsFromAPI());
  }, []);
  return (
    <>
      <h1 className="cards-title">Star wars films</h1>
      <ul className="cards">
        {films.map((film) => (
          <li key={film.episode_id} className="card-wrapper">
            <figure>
              <img src={filmsCovers[film.episode_id]} className="img" />
              <figcaption className="caption">
                <span className="title">{film.title}</span>
                <span className="director">{film.director}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
