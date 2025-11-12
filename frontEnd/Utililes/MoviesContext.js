import { createContext } from "react";
const MoviesContext = createContext({
  topMovies: [],
  setTopMovies: () => {},
  popularMovies: [],
  setPopularMovies: () => {},
  nowPlaying: [],
  setNowPlaying: () => {},
  upComing: [],
  setUpComing: () => {},
  userPresent: false,
  setUserPresent: () => {},
  tmbdMovies: [],
  setTmbdMovies: () => {},
  gptMovies: [],
  setGptMovies: () => {},
  changeLang: { lang: "en" },
  setChangeLang: () => {},
  token: null,
  setToken: () => {},
});
export default MoviesContext;
