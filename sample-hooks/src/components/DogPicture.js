import * as styles from "../styles/dog-picture.module.css";

const DogPicture = ({ alt, index, picture }) => {
  const PICTURE_SIZE = 450;
  return (
    <img
      key={index}
      className={`${styles.picture}`}
      src={picture.message}
      alt={alt}
      width={PICTURE_SIZE}
      height={PICTURE_SIZE}
    />
  );
};

export default DogPicture;
