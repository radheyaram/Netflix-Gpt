import useFetchBackroundVideo from "../../Utililes/useFetchBackroundVideo";
const VideoBackGround = ({ movieId }) => {
  const movieTrailer = useFetchBackroundVideo(movieId);
  if (!movieTrailer) return null;
  return (
    <div className="relative w-full h-screen overflow-hidden -mt-40">
      <iframe
        className="w-full  aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackGround;
