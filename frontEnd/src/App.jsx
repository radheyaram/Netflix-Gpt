import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Browser from "./Components/Browser.jsx";
import LogIn from "./Components/Login.jsx";
import AuthLayout from "./Components/AuthLayout.jsx";
import MoviesContextProvider from "../Utililes/MoviesContextProvider.jsx";
import SignUp from "./Components/SignUp.jsx";
const App = () => {
  return (
    <div>
      <MoviesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/browser" element={<Browser />} />
          </Routes>
        </BrowserRouter>
      </MoviesContextProvider>
    </div>
  );
};
export default App;
