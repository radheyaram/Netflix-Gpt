import { useEffect, useContext } from "react";
import MoviesContext from "./MoviesContext";
import { API_KEY, options } from "../src/Components/Constant";
const useFetchData = () => {
  const { setTopMovies, topMovies } = useContext(MoviesContext);

  const fetchMOviesData = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY,
        options
      );
      const json = await data.json();

      setTopMovies(json?.results || []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (!topMovies?.length) fetchMOviesData();
  }, [topMovies]);
};

export default useFetchData;
