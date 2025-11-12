import Brosercontainer from "./Brosercontainer";
import BroserMiddleContainer from "./BroserMiddleContainer";
import BroserBottomContainer from "./BroserBottomContainer";
import useFetchData from "../../Utililes/useFetchData";
import useFetchMovie2 from "../../Utililes/useFetchMovie2";
import useNowPlaying from "../../Utililes/useNowPlaying";
import useUpComing from "../../Utililes/useUpComing";
import MoviesContext from "../../Utililes/MoviesContext";
import { useContext, useEffect } from "react";
import SearchBarContainer from "./SearchBarContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Browser = () => {
  const { userPresent, token } = useContext(MoviesContext);
  useFetchData();
  useFetchMovie2();
  useNowPlaying();
  useUpComing();
  const navigate = useNavigate();
  const fetchBrowser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/browser`,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      console.log("Browser Response:", response.data);
    } catch (err) {
      console.error("Browser Fetch Error:", err);
      if (err.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchBrowser();
    } else {
      navigate("/login");
    }
  }, [token]);
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Brosercontainer />
      {!userPresent ? (
        <>
          <BroserMiddleContainer />
          <BroserBottomContainer />
        </>
      ) : (
        <SearchBarContainer />
      )}
    </div>
  );
};
export default Browser;
