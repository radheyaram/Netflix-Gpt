import { options, API_KEY } from "../src/Components/Constant";
import { useContext, useEffect } from "react";
import MoviesContext from "./MoviesContext";
const useUpComing = () => {
  const { setUpComing, upComing } = useContext(MoviesContext);
  const fetchMOviesData = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=" + API_KEY,
        options
      );
      const json = await data.json();

      setUpComing(json?.results || []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (!upComing.length) fetchMOviesData();
  }, [upComing]);
};

export default useUpComing;
