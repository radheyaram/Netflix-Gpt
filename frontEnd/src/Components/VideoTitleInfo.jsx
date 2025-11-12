const VideoTitleInfo = ({
  original_title = "title",
  overview = "overview",
}) => {
  return (
    <div className=" p-10 w-full aspect-video absolute z-10 mt-20 bg-gradient-to-r from-black">
      <div className="mt-15 ">
        <div className="mb-3">
          <h1 className="font-bold text-2xl  pt-20 pl-3 text-white">
            {original_title}
          </h1>
        </div>
        <div className="group">
          <h3
            className="w-1/4 pl-3 text-white transition-all duration-500 ease-in-out 
      group-hover:-translate-y-5 group-hover:opacity-90"
          >
            {overview}
          </h3>
        </div>
        <button
          className="bg-white px-6 p-3 rounded-lg ml-3 m-3 text-black
  hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200"
        >
          ▶Play
        </button>
        <button className="bg-gray-200 px-6 p-3 rounded-lg text-black">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleInfo;
