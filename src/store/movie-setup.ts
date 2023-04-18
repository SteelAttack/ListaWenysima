import { defineStore } from "pinia";
// @ts-ignore
import type { Movie } from "@/movies/interfaces/movie.ts";
import type { WatchedMovies } from "@/movies/interfaces/watchedMovies";
import { computed, ref } from "vue";


export const useMovieSetupStore = defineStore("movieSetup", () => {
  const movies = ref<Movie[]>([]);
  const movie = ref<Movie>();


  const addedMovies = ref<WatchedMovies[]>([]);





  return {
    //Props
    movies,
    movie,
    addedMovies,

    //Getters
    setAddedMovies( newMovies: WatchedMovies[]){
      addedMovies.value = newMovies
    }

    //Actions

  };
});
