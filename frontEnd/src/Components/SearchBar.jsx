import MoviesContext from "../../Utililes/MoviesContext";
import { useRef, useContext } from "react";
import { languages } from "./Constant";
import axios from "axios";
const SearchBar = () => {
  const inputRef = useRef(null);
  const { setTmbdMovies, setGptMovies, changeLang } = useContext(MoviesContext);
  const { lang } = changeLang;
  const gpthandler = async () => {
    const userInput = inputRef.current.value.trim();
    console.log(userInput);
    try {
      const respone = await axios.post(
        "http://localhost:777/browser/search/movies",
        { userInput }
      );
      console.log(respone?.data?.movies);
      console.log(respone?.data?.gptMovies);
      setTmbdMovies(respone?.data?.movies || []);
      setGptMovies(respone?.data?.gptMovies || []);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="mt-[3%] ml-[25%] ">
      <form
        className=" p-2 rounded-lg bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={languages[lang].placeholder}
          className=" bg-white px-4 py-2  rounded-lg col-span-9"
        />
        <button
          className="bg-red-500 px-4 py-2 ml-1 rounded-lg col-span-3"
          onClick={gpthandler}
        >
          {languages[lang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
