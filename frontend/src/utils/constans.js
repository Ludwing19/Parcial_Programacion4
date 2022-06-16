export const API_URL_PLANETS = () => `${import.meta.env.VITE_APIURL}/planets`;
export const API_URL_CONSTELLATIONS = () =>
  `${import.meta.env.VITE_APIURL}/constellations`;
export const API_URL_STARS = () => `${import.meta.env.VITE_APIURL}/stars`;
export const API_URL_LOGIN = () =>
  `${import.meta.env.VITE_APIURL}/users/auth/signin`;
export const API_URL_SIGNUP = () =>
  `${import.meta.env.VITE_APIURL}/users/auth/signup`;
export const HEADERS_AUTH = (token) => ({
  headers: {
    "x-token": token,
  },
});
