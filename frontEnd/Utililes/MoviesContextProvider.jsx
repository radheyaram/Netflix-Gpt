import MoviesContext from "./MoviesContext";
import { useState } from "react";
const MoviesContextProvider = ({ children }) => {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [userPresent, setUserPresent] = useState(false);
  const [tmbdMovies, setTmbdMovies] = useState([]);
  const [gptMovies, setGptMovies] = useState([]);
  const [changeLang, setChangeLang] = useState({
    lang: "en",
  });
  const [token, setToken] = useState(null);
  return (
    <MoviesContext.Provider
      value={{
        topMovies,
        setTopMovies,
        popularMovies,
        setPopularMovies,
        nowPlaying,
        setNowPlaying,
        upComing,
        setUpComing,
        userPresent,
        setUserPresent,
        tmbdMovies,
        setTmbdMovies,
        gptMovies,
        setGptMovies,
        changeLang,
        setChangeLang,
        token,
        setToken,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
