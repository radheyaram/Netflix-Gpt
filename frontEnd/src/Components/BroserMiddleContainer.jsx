import { useContext } from "react";
import VideoTitleInfo from "./VideoTitleInfo";
import VideoBackGround from "./VideoBackGround";
import MoviesContext from "../../Utililes/MoviesContext";
const BroserMiddleContainer = () => {
  const { topMovies } = useContext(MoviesContext);

  const { original_title, overview, id } = topMovies[14] || {};
  return (
    <div>
      <VideoTitleInfo
        original_title={original_title}
        overview={overview}
        movieId={id}
      />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default BroserMiddleContainer;
