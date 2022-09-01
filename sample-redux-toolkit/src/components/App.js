import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsFromAPI } from "../features/films/filmsSlice";
import attackClones from "../assets/attack-clones.jpg";
import newHope from "../assets/new-hope.jpg";
import empiresStrikesBack from "../assets/empire-strikes-back.jpg";
import phantomMenace from "../assets/phantom-menace.jpg";
import returnOfJedi from "../assets/return-of-jedi.jpg";
import revengeSith from "../assets/revenge-sith.jpg";

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
      <h1 style={{ textAlign: "center" }}>Star wars films</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {films.map((film) => (
          <li
            key={film.episode_id}
            style={{ flexBasis: "350px", marginTop: "50px" }}
          >
            <figure>
              <img
                src={filmsCovers[film.episode_id]}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  verticalAlign: "middle",
                  borderRadius: "5px",
                }}
              />
              <caption>
                {film.title} {film.director}
              </caption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
