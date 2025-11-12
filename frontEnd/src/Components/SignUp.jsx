// SignUp.jsx
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const SignUp = () => {
  const [values, setValues] = useState({
    userName: "",
    emailId: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   setErrMsg("");

  //   const { userName, emailId, password } = values;

  //   if (!userName || !emailId || !password) {
  //     setErrMsg("All fields are required.");
  //     return;
  //   }

  //   const emailRegex = /^\S+@\S+\.\S+$/;
  //   if (!emailRegex.test(emailId)) {
  //     setErrMsg("Please enter a valid email.");
  //     return;
  //   }

  //   if (password.length < 6) {
  //     setErrMsg("Password must be at least 6 characters.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       `${import.meta.env.VITE_API_URL}/signUp`,
  //       values
  //     );

  //     if (response.data.success) {
  //       setErrMsg("Signup successful! Please log in.");
  //       setValues({ userName: "", emailId: "", password: "" });
  //       setTimeout(() => navigate("/login"), 1000);
  //     }
  //   } catch (err) {
  //     if (err.response) {
  //       setErrMsg(err.response.data.message);
  //     } else {
  //       setErrMsg("Something went wrong, please try again.");
  //     }
  //   }
  // };
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrMsg("");

    const { userName, emailId, password } = values;

    // Basic validation
    if (!userName || !emailId || !password) {
      setErrMsg("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/signUp`,
        values
      );

      if (response.data.success) {
        // ✅ Show success message
        setErrMsg("Signup successful! Please log in.");

        // ✅ Clear form inputs
        setValues({ userName: "", emailId: "", password: "" });

        // ✅ Wait a moment before navigating
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      if (err.response) {
        setErrMsg(err.response.data.message);
      } else {
        setErrMsg("Something went wrong, please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSignup}
        className="bg-black/60 p-10 rounded-lg shadow-lg w-[350px] flex flex-col gap-4"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up</h2>

        <input
          type="text"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          className="bg-[#333] text-white px-4 py-2 rounded"
          placeholder="Username"
          required
        />

        <input
          type="email"
          name="emailId"
          value={values.emailId}
          onChange={handleChange}
          className="bg-[#333] text-white px-4 py-2 rounded"
          placeholder="Email"
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
          Sign Up
        </button>

        <p className="text-sm text-gray-300 mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
