import { ref, computed } from "vue";
import type { WatchedMovies } from "@/movies/interfaces/watchedMovies";
import type { Movie } from "@/movies/interfaces/movie";
import bdApi from "@/api/bdApi";
import axios from "axios";

// const movieList = ref<Movie[]>([]);
const cartMovieList = ref<WatchedMovies[]>([]);
// const movie = ref<Movie>();
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

export const useCartMovies = () => {
  const loadEntries = async () => {
    const { data } = await bdApi.get<WatchedMovies[]>("/movieList.json");
    cartMovieList.value = data;
  };

  const createEntry = async (movies: Movie[]) => {
    defineMovieData(movies);
    await Promise.all(
      cartMovieList.value.map(async (element) => {
        const { data } = await bdApi.post(`movieList.json`, element);
      })
    );
  };

  const defineMovieData = (movies: Movie[]) => {
    movies.forEach((movie) => {
      const newMovie: WatchedMovies = {
        id: movie.id,
        img: movie.poster_path,
        title: movie.original_title,
        name: movie.title,
        penguins: "0",
        stars: "0",
        value: movie.vote_average,
        release_date: movie.release_date,
        date: new Date(Date.now()).toISOString().split("T")[0],
      };
      cartMovieList.value.push(newMovie);
    });
  };

  return {
    // Properties
    cartMovieList,
    errorMessage,
    hasError,
    isLoading: isLoading,

    // Getters

    // Methods
    createEntry,
    loadEntries,
  };
};

export default useCartMovies;
