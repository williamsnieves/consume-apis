import { useEffect, useState } from "react";
import * as styles from "../styles/gallery.module.css";
import { getSeedRamdonPictureUrl } from "../utils/data";
import { makeRequest } from "../utils/request";
import DogPicture from "./DogPicture";

const Gallery = ({ dogs }) => {
  const [dogPictures, setDogPictures] = useState(null);
  const handleRequestImages = async (dogsResult) => {
    if (dogsResult) {
      const requestDogImages = Object.keys(dogsResult.message).map(
        async (dog) => {
          return makeRequest(getSeedRamdonPictureUrl(dog));
        }
      );

      const payload = (await Promise.all(requestDogImages)).map(
        (image) => image
      );

      setDogPictures(payload);
    }
  };

  useEffect(() => {
    handleRequestImages(dogs);
  }, [dogs]);

  return (
    <div className={styles.pictureGrid}>
      {dogPictures &&
        dogPictures.map((picture, index) => (
          <DogPicture key={index} alt={`dog-${index}`} {...{ picture }} />
        ))}
    </div>
  );
};

export default Gallery;
