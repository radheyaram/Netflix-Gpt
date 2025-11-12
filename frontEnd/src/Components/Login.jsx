// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import { BG_LOGO_URL } from "./Constant";
// import { useContext } from "react";
// import MoviesContext from "../../Utililes/MoviesContext";
// const LogIn = () => {
//   const [values, setValues] = useState({
//     userName: "",
//     emailId: "",
//     password: "",
//   });
//   const [errMsg, setErrMsg] = useState("");
//   const [isLogIn, setIsLogIn] = useState(true);
//   const navigate = useNavigate();
//   const { token, setToken } = useContext(MoviesContext);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const onSubmitSigIn = async (e) => {
//     setErrMsg("");
//     e.preventDefault();
//     setValues({
//       userName: "",
//       emailId: "",
//       password: "",
//     });
//     const loginData = {
//       emailId: values.emailId,
//       password: values.password,
//     };

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_URL}/logIn`,
//         loginData
//       );
//       setToken(response?.data?.token);
//       setValues({ emailId: "", password: "" });
//     } catch (error) {
//       if (error.response) {
//         setValues({
//           userName: "",
//           emailId: "",
//           password: "",
//         });
//         setErrMsg(error.response.data.message);
//       } else {
//         setErrMsg("Something went wrong, please try again.");
//       }
//     }
//   };

//   const onSubmitSigUp = async (e) => {
//     e.preventDefault();
//     setErrMsg("");
//     const signupData = {
//       userName: values.userName.trim(),
//       emailId: values.emailId.trim(),
//       password: values.password.trim(),
//     };
//     if (!signupData.userName || !signupData.emailId || !signupData.password) {
//       setErrMsg("All fields are required.");
//       return;
//     }

//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!emailRegex.test(signupData.emailId)) {
//       setErrMsg("Please enter a valid email address.");
//       return;
//     }

//     if (signupData.password.length < 6) {
//       setErrMsg("Password must be at least 6 characters long.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_URL}/signUp`,
//         signupData
//       );
//       console.log(response);
//       if (response.data.success) {
//         setErrMsg(response.data.message);
//         setIsLogIn(true);
//         setValues({
//           userName: "",
//           emailId: "",
//           password: "",
//         });

//         // setErrMsg("");
//       }
//     } catch (err) {
//       if (err.response) {
//         setErrMsg(err.response.data.message);
//         setValues({
//           userName: "",
//           emailId: "",
//           password: "",
//         });
//         console.error(err);
//       } else {
//         setErrMsg("Something went wrong, please try again.");
//       }
//     }
//   };

//   const handleSign = () => {
//     setErrMsg("");
//     setIsLogIn(!isLogIn);
//   };
//   useEffect(() => {
//     if (token) {
//       return navigate("/browser");
//     }
//   }, [token, navigate]);

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center text-white">
//       <div className="absolute inset-0 -z-10">
//         <img
//           className="w-full h-full object-cover"
//           src={BG_LOGO_URL}
//           alt="background"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       <Header />

//       <form
//         onSubmit={(e) => (isLogIn ? onSubmitSigIn(e) : onSubmitSigUp(e))}
//         className="relative bg-black/60 p-10 rounded-lg shadow-lg w-[350px] flex flex-col gap-4"
//       >
//         <h2 className="text-3xl font-semibold mb-4 text-center">
//           {isLogIn ? "Sign In" : "Sign Up"}
//         </h2>

//         {!isLogIn && (
//           <input
//             type="text"
//             name="userName"
//             value={values.userName}
//             onChange={handleOnChange}
//             className="bg-[#333] text-white px-4 py-2 rounded focus:outline-none"
//             placeholder="Username"
//             required
//           />
//         )}

//         <input
//           type="email"
//           name="emailId"
//           value={values.emailId}
//           onChange={handleOnChange}
//           className="bg-[#333] text-white px-4 py-2 rounded focus:outline-none"
//           placeholder="Email"
//           autoComplete="email"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           value={values.password}
//           onChange={handleOnChange}
//           className="bg-[#333] text-white px-4 py-2 rounded focus:outline-none"
//           placeholder="Password"
//           autoComplete="current-password"
//           required
//         />
//         {errMsg && <p className="px-2 mb-2 text-red-700 font-bold">{errMsg}</p>}
//         <button
//           type="submit"
//           className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded mt-2"
//         >
//           {isLogIn ? "Log In" : "Sign Up"}
//         </button>

//         <p
//           onClick={handleSign}
//           className="text-sm text-gray-300 mt-3 text-center cursor-pointer hover:underline"
//         >
//           {isLogIn
//             ? "New to Netflix? Sign Up"
//             : "Already have an account? Sign In"}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LogIn;
// Login.jsx
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import MoviesContext from "../../Utililes/MoviesContext";

const Login = () => {
  const [values, setValues] = useState({ emailId: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const { token, setToken } = useContext(MoviesContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrMsg("");

    const { emailId, password } = values;
    if (!emailId || !password) {
      setErrMsg("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/logIn`,
        { emailId, password }
      );

      setToken(response?.data?.token);
      setValues({ emailId: "", password: "" });
    } catch (error) {
      if (error.response) {
        setErrMsg(error.response.data.message);
      } else {
        setErrMsg("Something went wrong, please try again.");
      }
    }
  };

  useEffect(() => {
    if (token) navigate("/browser");
  }, [token, navigate]);

  return (
    <AuthLayout>
      <form
        onSubmit={handleLogin}
        className="bg-black/60 p-10 rounded-lg shadow-lg w-[350px] flex flex-col gap-4"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center">Sign In</h2>

        <input
          type="email"
          name="emailId"
          value={values.emailId}
          onChange={handleChange}
          className="bg-[#333] text-white px-4 py-2 rounded"
          placeholder="Email"
          autoComplete="email"
          required
        />

        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="bg-[#333] text-white px-4 py-2 rounded"
          placeholder="Password"
          required
        />

        {errMsg && <p className="text-red-500 font-bold">{errMsg}</p>}

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded mt-2"
        >
          Log In
        </button>

        <p className="text-sm text-gray-300 mt-3 text-center">
          New to Netflix?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
