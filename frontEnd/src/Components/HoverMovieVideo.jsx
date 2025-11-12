import { POSTER_URL } from "./Constant";
const HoverMovieVideo = ({ overview, backdrop_path, title }) => {
  return (
    <div className="absolute aspect-video group-hover:visible">
      <img src={POSTER_URL + backdrop_path} />
    </div>
  );
};

export default HoverMovieVideo;
