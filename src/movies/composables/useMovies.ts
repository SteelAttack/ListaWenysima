import { ref, computed } from "vue";
import type { Movie } from "@/movies/interfaces/movie";
import movieApi from "@/api/moviesApi";
import axios from "axios";

const movieList = ref<Movie[]>([]);
const cartMovieList = ref<Movie[]>([]);
const movie = ref<Movie>();
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

export const useMovies = () => {
  const searchMoviesByString = async (searchString: string) => {
    try {
      const { data } = await movieApi.get(
        `/search/movie?api_key=f2732b1c8d7d301c4fc1280f4fd7f6e3&query=${searchString}`
      );
      movieList.value = data.results;
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      if (axios.isAxiosError(error)) {
        return (errorMessage.value = error.message);
      }
      errorMessage.value = JSON.stringify(error);
    }
  };

  const searchMovieById = async (id: string) => {
    try {
      const { data } = await movieApi.get<Movie>(
        `/movie/${id}?api_key=f2732b1c8d7d301c4fc1280f4fd7f6e3`
      );
      movie.value = data;
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      if (axios.isAxiosError(error)) {
        return (errorMessage.value = error.message);
      }
      errorMessage.value = JSON.stringify(error);
    }
  };

  return {
    // Properties
    movie,
    cartMovieList,
    movieList,
    errorMessage,
    hasError,
    isLoading: isLoading,

    // Getters
    count: computed(() => movieList.value.length),

    // Methods
    searchMoviesByString,
    searchMovieById,
  };
};

export default useMovies;
