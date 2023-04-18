import axios from "axios";

const apiKey =
  "https://api.themoviedb.org/3/movie/550?api_key=f2732b1c8d7d301c4fc1280f4fd7f6e3";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default movieApi;
