<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import type { Movie } from "../interfaces/movie";
import { useMovieSetupStore } from "@/store/movie-setup";
import useMovies from "../composables/useMovies";
import useCartMovies from "../composables/useCartMovies";
// const props = defineProps<{ title: string; visible: boolean }>();
import { ref, onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
  movieList.value = [];
  cartMovieList.value = [];
});
const useStoreMovie = useMovieSetupStore();
const { createEntry } = useCartMovies();

const {
  movie,
  cartMovieList,
  movieList,
  isLoading,
  searchMoviesByString,
  searchMovieById,
} = useMovies();
const toggleModal = ref(false);
const searchBox = ref("");

const SearchMovies = () => {
  searchMoviesByString(searchBox.value);
};

const ShowDetails = (id: string) => {
  searchMovieById(id);
  toggleModal.value = true;
};

const closeDetails = () => {
  movie.value = undefined;
  toggleModal.value = false;
};

const selectMovieFromMovieList = (
  movieList: Movie[],
  id: string | undefined
) => {
  return movieList.find((movie) => movie.id == id);
};

const addToCart = (id: string | undefined) => {
  if (cartMovieList.value.find((movie) => movie.id == id)) return;
  let movie = selectMovieFromMovieList(movieList.value, id);
  if (movie != undefined ? cartMovieList.value.push(movie) : "") {
    toggleModal.value = false;
    // const element = document.querySelector("#cart");
    // element?.classList.add("animatedImg");
  }
};

const removeFromCart = (id: string) => {
  if (id == "") return;
  const indexMovie = cartMovieList.value.findIndex((movie) => movie.id == id);
  cartMovieList.value.splice(indexMovie, 1);
};

const addMovie = () => {
  createEntry(cartMovieList.value);
};
</script>

<template>
  <form onsubmit="return false;">
    <div class="flex top-5">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="w-full right-3 relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          v-on:keyup.enter="SearchMovies()"
          v-model="searchBox"
          type="search"
          id="default-search"
          class="bg-transparent block w-full p-4 pl-10 text-sm text-indigo-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
        <button
          @click="SearchMovies"
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 py-2 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center"
        >
          Search
        </button>
      </div>
      <div class="contrae">
        <button
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          type="button"
        >
          <img
            id="cart"
            viewBox="0 0 50 50"
            width="50"
            height="50"
            src="@/assets/clapperboard.png"
            alt=""
          />
        </button>
      </div>
      <label
        id="lblCartCount"
        :class="cartMovieList.length == 0 ? 'hidden' : ''"
        class="h-5 rounded-full"
        >{{ cartMovieList.length }}</label
      >
    </div>

    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
    >
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              ¿Qué te pasa?
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div
              class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
            >
              <!-- <div class="flex items-center justify-between mb-4">
                <h5
                  class="text-xl font-bold leading-none text-gray-900 dark:text-white"
                >
                  Movies added
                </h5>
                <a
                  href="#"
                  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div> -->
              <div class="flow-root">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li
                    v-for="{
                      id,
                      original_title,
                      poster_path,
                      title,
                    } of cartMovieList"
                    :key="id"
                    class="py-3 sm:py-4"
                  >
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          :src="
                            poster_path == null
                              ? '/src/assets/default.png'
                              : 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
                                poster_path
                          "
                        />
                      </div>
                      <div class="flex-1 min-w-0 ml-4">
                        <p
                          class="text-sm font-medium text-gray-900 truncate dark:text-white"
                        >
                          {{ title }}
                        </p>
                        <p
                          class="text-sm text-gray-500 truncate dark:text-gray-400"
                        >
                          {{ id }}
                        </p>
                      </div>
                      <div
                        class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                      >
                        <svg
                          @click="removeFromCart(id)"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#ff0000"
                          class="w-6 cursor-pointer contrae"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M10 12V17"
                              stroke="#af1212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M14 12V17"
                              stroke="#af1212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M4 7H20"
                              stroke="#af1212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                              stroke="#af1212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                              stroke="#af1212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="justify-end flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              @click="addMovie()"
              data-modal-hide="defaultModal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>

  <div class="top-10 text-base movies">
    <div
      v-for="{ id, original_title, poster_path, title } of movieList"
      :key="id"
    >
      <article class="card">
        <div class="card-body flex-wrap">
          <div class="movie">
            <img
              class="cursor-pointer movie-poster"
              :src="
                poster_path == null
                  ? '/src/assets/default.png'
                  : 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
                    poster_path
              "
            />

            <div class="sm:text-center -top-1.5">
              <button
                type="button"
                @click="addToCart(id)"
                class="-bottom-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                + Agregar
              </button>

              <button
                @click="ShowDetails(id)"
                class="-bottom-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                type="button"
              >
                Show details
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>

  <!-- Large Modal -->
  <div
    v-if="toggleModal"
    class="dark fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
  >
    <div class="relative w-full h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            {{ movie?.title }}
          </h3>
          <button
            type="button"
            @click="closeDetails()"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="flex font-bold text-white-500 rounded p-6 space-y-6">
          <img
            class="right-2"
            :src="
              movie?.poster_path == null
                ? '/src/assets/default.png'
                : 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
                  movie?.poster_path
            "
          />
          <div class="text-base flex-col">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Título original
            </label>
            <span class="font-sans">{{ movie?.original_title }}</span>
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Detalle
            </label>
            <span class="font-sans">{{ movie?.overview }}</span>
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Fecha de Lanzamiento
            </label>
            <span class="font-sans">{{ movie?.release_date }}</span>
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Valoración
            </label>
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {{ movie?.vote_average }}
              </p>
              <span
                class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"
              ></span>
              <a
                href="#"
                class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >{{ movie?.vote_count }} Votos</a
              >
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="justify-end flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            type="button"
            @click="addToCart(movie?.id)"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            + Agregar
          </button>
          <!-- <button
            data-modal-hide="large-modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-hide="large-modal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div
    v-if="toggleModal"
    class="absolute z-40 inset-0 opacity-50 bg-black"
  ></div> -->
</template>

<style></style>
