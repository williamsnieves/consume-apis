const SEEDS_API_URL = "https://dog.ceo/api/breeds/list/all";

const getSeedRamdonPictureUrl = (seed) =>
  `https://dog.ceo/api/breed/${seed}/images/random`;

export { SEEDS_API_URL, getSeedRamdonPictureUrl };
