import MovieCard from "./MovieCard";
const MovieList = ({ movies, title }) => {
  return (
    <div className="pl-4   overflow-hidden">
      <h1 className="text-3xl  ml-2 text-white">{title}</h1>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 pr-4  mt-2 snap-x snap-mandatory scroll-smooth">
          {movies.map((movie) => (
            <div key={movie.id} className="shrink-0 snap-start mr-1 last:mr-0">
              <MovieCard
                poster={movie?.poster_path}
                title={movie.title || movie.name}
                overview={movie.overview}
                backdrop_path={movie.backdrop_path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
