import MovieList from "./MovieList";
import MoviesContext from "../../Utililes/MoviesContext";
import { useContext } from "react";
const BroserBottomContainer = () => {
  const { topMovies, popularMovies, nowPlaying, upComing } =
    useContext(MoviesContext);
  return (
    <div className=" bg-black">
      <div className="-mt-12 relative z-10">
        <MovieList title={"Upcoming Movies"} movies={upComing} />
        <MovieList title={"Top Rated Movies"} movies={topMovies} />
        <MovieList title={"Now Playing Movies"} movies={nowPlaying} />
        <MovieList title={"Popular Tv Series"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default BroserBottomContainer;
