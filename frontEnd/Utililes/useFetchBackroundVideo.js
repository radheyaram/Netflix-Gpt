import { options } from "../src/Components/Constant";
import { useEffect, useState } from "react";
const useFetchBackroundVideo = (movieId) => {
  const [movieTrailer, setMovieTrailer] = useState({});
  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        options
      );
      const json = await data.json();
      const filter = json.results.filter((movie) => movie.type == "Trailer");
      setMovieTrailer(filter[0]);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (!movieId) return;
    fetchData();
  }, [movieId]);

  return movieTrailer;
};

export default useFetchBackroundVideo;
