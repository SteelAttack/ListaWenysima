import { defineStore } from "pinia";
// @ts-ignore
import type { Movie } from "@/movies/interfaces/movie.ts";

export type cartItems = {
  cartMovies: Movie[];
};

export const useMovieOptionsStore = defineStore("movieOptions", {
  state: () =>
    ({
      items: 0,
      cartMovies: [],
    } as cartItems),
  getters: {
    //
  },
  actions: {
    //change the pinia state
    addToCart(movie: Movie) {
      this.cartMovies.push(movie);
    },
  },
});
