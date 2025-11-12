import { POSTER_URL } from "./Constant";
import HoverMovieVideo from "./HoverMovieVideo";
const MovieCard = ({ poster, title, overview }) => {
  if (!poster) return null;
  return (
    <div className="group relative w-61 h-88 rounded-lg overflow-hidden border border-white">
      <img
        src={POSTER_URL + poster}
        alt="Movie"
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center text-white opacity-0 translate-y-5 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
        <h2 className="text-3xl font-semibold text-red-700 px-2">{title}</h2>
        <p className="text-sm px-3 mt-2 line-clamp-3">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
