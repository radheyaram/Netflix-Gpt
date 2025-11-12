import express from "express";
import cors from "cors";
import users from "./model.js";
import mongoose from "mongoose";
import { GPT_URL, API_KEY, options, headers } from "./Constants.js";
import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
const port = 777;
app.use(express.json());
app.post("/signUp", async (req, res) => {
  try {
    const { userName, emailId, password } = req.body;
    if (!userName || !emailId || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(emailId)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email." });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }
    const exitUser = await users.findOne({ emailId });
    if (exitUser) {
      res.status(400).json({ success: false, message: "user already exits" });
    }

    const newUser = await users.create(req.body);
    return res.status(200).json({
      success: true,
      message: "User registered successfully!",
      user: newUser.userName,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error. Please try again." });
  }
});
app.post("/logIn", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await users.findOne({ emailId });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Email is Invalid" });
    }
    if (user.password !== password) {
      return res
        .status(405)
        .json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({
      success: true,
      message: "user login succesfully",
      token: token,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "serror error", error: err.message });
  }
});
const middleware = (req, res, next) => {
  const token = req.header("x-token");
  try {
    if (!token) {
      return res.status(400).send("token is not there");
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req._id = decode._id;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
};
app.get("/browser", middleware, async (req, res) => {
  const _id = req._id;
  try {
    const user = await users.findById(_id);
    return res.status(200).json({ success: true, user: user.userName });
  } catch (err) {
    console.log(err);
    res.status(500).send("something fishy");
  }
});
const searchMovieFromTmdb = async (movie) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;
  try {
    const moviesData = await axios.get(url, options);
    return moviesData.data.results || [];
  } catch (err) {
    console.log("TMDB fetch error:", err.message);
    return [];
  }
};

app.post("/browser/search/movies", async (req, res) => {
  const { userInput } = req.body;
  const gptquery = `Act as a Movie Recommendation System and suggest some movies for the query : ${userInput}. only give me names of  5 movie names, comma-separated like the Example result given ahead. example result : Pushpa,Arjun Reddy,Baahubali,Ala Vaikunthapurramuloo,Eega.`;
  const data = {
    model: "google/gemma-3n-e4b-it:free",
    messages: [{ role: "user", content: gptquery }],
  };
  try {
    const gptResult = await axios.post(GPT_URL, data, headers);

    if (!gptResult.data.choices) {
      return "something error";
    }
    const gptMoviesList =
      gptResult?.data?.choices[0]?.message?.content.split(",") || [];
    const promiseArrays = gptMoviesList.map((movie) =>
      searchMovieFromTmdb(movie.trim())
    );
    const tmbdResult = (await Promise.all(promiseArrays)).filter(
      (arr) => arr.length > 0
    );
    res
      .status(200)
      .json({ success: true, movies: tmbdResult, gptMovies: gptMoviesList });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

const moddaguduvu = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("moogodb coonected");
    app.listen(port, () => {
      console.log(`server is running on ${port}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};
moddaguduvu();
