import MoviesContext from "../../Utililes/MoviesContext";
import { useContext } from "react";
import MovieList from "./MovieList";
const SearchMovieSuggestions = () => {
  const { tmbdMovies, gptMovies } = useContext(MoviesContext);
  if (!tmbdMovies || tmbdMovies.length === 0) return null;
  return (
    <div className="py-4 my-4 bg-black/30  text-white">
      <div>
        {gptMovies.map((movieName, index) => {
          const movies = tmbdMovies[index];
          if (!movies || movies.length == 0) return null;
          return (
            <MovieList key={movieName} title={movieName} movies={movies} />
          );
        })}
      </div>
    </div>
  );
};

export default SearchMovieSuggestions;
