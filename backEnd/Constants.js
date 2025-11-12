import dotenv from "dotenv";
dotenv.config();
export const GPT_URL = process.env.GPT_URL;
dotenv.config();
export const models = [
  "google/gemma-3n-e4b-it:free",
  "nvidia/nemotron-nano-12b-v2-vl:free",
  "alibaba/tongyi-deepresearch-30b-a3b:free",
  "google/gemma-3n-e2b-it:free",
];
export const API_KEY = process.env.API_KEY;
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.TMDB_ACCESS_TOKEN,
  },
};
export const headers = {
  headers: {
    Authorization: `Bearer ${process.env.GPT_API_KEY}`,
    "Content-Type": "application/json",
  },
};
