import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import { SEEDS_API_URL } from "../utils/data";
import { makeRequest } from "../utils/request";
import * as styles from "../styles/dog-seeds.module.css";

const DogSeeds = () => {
  const [dogs, setDogs] = useState(null);

  const getBreeds = async () => {
    const dogsResult = await makeRequest(SEEDS_API_URL);

    setDogs(dogsResult);
  };

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Dog seeds</h1>
      <Gallery {...{ dogs }} />
    </div>
  );
};

export default DogSeeds;
