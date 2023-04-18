<script setup lang="ts">
import CardList from "@/movies/components/CardList.vue";
import type { WatchedMovies } from "../interfaces/watchedMovies";
import useCartMovies from "../composables/useCartMovies";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
const { cartMovieList, isLoading, hasError, errorMessage, loadEntries } =
  useCartMovies();

loadEntries();

// const lastMovies = () => {
//   const lastMovies = cartMovieList.value.sort(
//     (a, b) => +new Date(a.date) - +new Date(b.date)
//   );
//   console.log(lastMovies);
// };
// lastMovies();
//
</script>

<template>
  <div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="slider-frame relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
        <img
          src=""
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src=""
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src=""
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src=""
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 5 -->
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
      ></button>
      <!-- <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 5"
        data-carousel-slide-to="4"
      ></button> -->
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>

  <!-- <div class="slider-frame">
    <ul>
      <li>
        <img src="@/assets/imgCustom/pexels-cmonphotography-1809616.jpg" />
      </li>
      <li>
        <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" />
      </li>
      <li>
        <img src="@/assets/imgCustom/pexels-james-frid-14680182.jpg" />
      </li>
      <li>
        <img src="@/assets/imgCustom/pexels-pixabay-532263 (1).jpg" />
      </li>
    </ul>
  </div> -->

  <div class="border rounded-lg p-4 w-full movieList top-10">
    <div
      v-for="{
        name,
        img,
        title,
        value,
        penguins,
        stars,
        release_date,
      } of cartMovieList"
    >
      <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
        <div class="card-body">
          <img
            class=""
            :src="
              img == null
                ? '/src/assets/default.png'
                : 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + img
            "
          />
        </div>
        <div class="h-56 px-4 py-2 mt-2">
          <h2 class="h-12 font-bold text-gray-800 tracking-normal">
            {{ name }}
          </h2>
          <div class="flex items-center justify-between mt-2 mx-6">
            <a href="#" class="text-blue-500 text-xs -ml-3">{{ title }}</a>
            <a href="#" class="flex text-gray-700">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                class="w-6 h-6 text-blue-500"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              5
            </a>
          </div>
          <div class="flex items-center">
            <div v-for="item in penguins">
              <img
                height="30"
                width="30"
                class="ml-1 rounded-full"
                src="@/assets/Ilustración_sin_título.png"
              />
            </div>
          </div>
          <div class="flex items-center">
            <div v-for="item in stars">
              <img
                height="30"
                width="30"
                class="ml-1 rounded-full"
                src="@/assets/hugstiluwu.png"
              />
            </div>
          </div>
          <div
            style="position: absolute; bottom: 2px"
            class="author flex items-center -ml-3 my-3"
          >
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
                {{ value }}
              </p>
              <span
                class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"
              ></span>
            </div>
            <h2 class="text-sm tracking-tighter text-gray-900">
              <a href="#">By Imdb</a>
              <span class="text-gray-600">{{ release_date }}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap");

body {
  text-align: center;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
}
.hr-text:before {
  content: "";
  background: linear-gradient(to right, transparent, #818078, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #818078;
  background-color: #fcfcfa;
}

.-translate-y-4 {
  --tw-translate-y: -1rem;
}
</style>
