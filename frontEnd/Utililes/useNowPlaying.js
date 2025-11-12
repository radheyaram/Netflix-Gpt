import { options, API_KEY } from "../src/Components/Constant";
import { useContext, useEffect } from "react";
import MoviesContext from "./MoviesContext";
const useNowPlaying = () => {
  const { setNowPlaying, nowPlaying } = useContext(MoviesContext);
  const fetchMOviesData = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY,
        options
      );
      const json = await data.json();

      setNowPlaying(json?.results || []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (!nowPlaying.length) fetchMOviesData();
  }, [nowPlaying]);
};

export default useNowPlaying;
