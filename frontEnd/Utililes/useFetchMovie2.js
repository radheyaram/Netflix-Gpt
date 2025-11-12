import { options, API_KEY } from "../src/Components/Constant";
import { useContext, useEffect } from "react";
import MoviesContext from "./MoviesContext";
const useFetchMovie2 = () => {
  const { setPopularMovies, popularMovies } = useContext(MoviesContext);
  const fetchMOviesData = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=" + API_KEY,
        options
      );
      const json = await data.json();

      setPopularMovies(json?.results || []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (!popularMovies?.length) fetchMOviesData();
  }, [popularMovies]);
};

export default useFetchMovie2;
