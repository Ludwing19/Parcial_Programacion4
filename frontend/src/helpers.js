import {
  API_URL_PLANETS,
  API_URL_CONSTELLATIONS,
  API_URL_STARS,
} from "./utils/constans";

export const getLanding = () => {
  const result = Math.floor(Math.random() * 3);
  switch (result) {
    case 0:
      return API_URL_PLANETS;
    case 1:
      return API_URL_STARS;
    case 2:
      return API_URL_CONSTELLATIONS;
  }
};
