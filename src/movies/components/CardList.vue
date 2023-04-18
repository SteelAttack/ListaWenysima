<script setup lang="ts">
import movieApi from "@/api/moviesApi";
import MovieCard from "@/movies/components/MovieCard.vue";
import { useQuery } from "@tanstack/vue-query";
import type { Movie } from "../interfaces/movie";

interface Props {
  movies: Movie[];
}

const props = defineProps<Props>();

const getMoviesSlow = async (): Promise<Movie[]> => {
  const { data } = await movieApi.get<Movie[]>("");
  return data;
};
const {
  isLoading,
  isError,
  data: movies,
  error,
} = useQuery(["movies"], getMoviesSlow);
</script>
<template>
  <h1 v-if="isLoading">Loading...</h1>

  <h1>test</h1>
  <div class="card-list">
    <div v-for="movie of movies">
      {{ movie }}
    </div>
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
