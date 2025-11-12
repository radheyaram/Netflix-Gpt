import Header from "./Header";
import { USERPROFILE_LOGO } from "./Constant";
import { useNavigate } from "react-router-dom";
import MoviesContext from "../../Utililes/MoviesContext";
import { useContext } from "react";
import { supportLan } from "./Constant";
const Brosercontainer = () => {
  const { setUserPresent, userPresent, setChangeLang, setToken } =
    useContext(MoviesContext);
  const navigate = useNavigate();
  const userHandler = () => {
    setUserPresent(!userPresent);
  };
  const handleLang = (e) => {
    setChangeLang({ lang: e.target.value });
  };
  return (
    <div className="">
      <div className="flex justify-between text-center ">
        <div className="">
          <Header />
        </div>
        <div className="flex mr-2 mt-[21px] z-60">
          {userPresent && (
            <select
              className="mr-2 bg-gray-700 text-white rounded-lg"
              onChange={handleLang}
            >
              {supportLan.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-blue-600 px-2 py-2 rounded-lg text-white mr-4"
            onClick={userHandler}
          >
            {userPresent ? "Homepage" : "Search GPT"}
          </button>
          <img
            className="w-12 rounded-lg  mr-2"
            src={USERPROFILE_LOGO}
            alt="UserProfile"
          />
          <h1
            className="mt-4 font-bold text-blue-600 cursor-pointer hover:text-red-500"
            onClick={() => setToken(null)}
          >
            (SigOut)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Brosercontainer;
