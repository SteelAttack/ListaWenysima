<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/shared/components/NavBar.vue";

import { routeLinks } from "./router/link-routes";
</script>

<template>
  <link href="/dist/output.css" rel="stylesheet" />

  <div class="wrapper">
    <header>
      <NavBar title="Lista Weñysima" :links="routeLinks" />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
