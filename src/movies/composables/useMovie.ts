import { ref, computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import type { Movie } from "@/movies/interfaces/movie";
import movieApi from "@/api/moviesApi";

const movieSet = ref<{ [id: string]: Movie }>({});
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getMovie = async (title: string) => {
  const data = await movieApi.get<Movie[]>(``);
  console.log(data);
};

const loadedMovie = (movie: Movie) => {
  hasError.value = false;
  errorMessage.value = null;

  movieSet.value[movie.title] = movie;
};

const loadedWithError = (error: string) => {
  hasError.value = true;
  errorMessage.value = error;
};
const useMovie = (title: string) => {
  const { isLoading } = useQuery(["movies", title], () => getMovie(title), {
    onSuccess: loadedMovie,
    onError: loadedWithError,
  });
  return {
    errorMessage,
    hasError,
    isLoading,
    list: movieSet,

    // Getters
    movie: computed<Movie | null>(() => movieSet.value[title]),
  };
};

export default useMovie;
