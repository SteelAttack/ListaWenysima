<script setup lang="ts">
import type { RouterLink } from "@/router/link-routes";

import { RouterView } from "vue-router";
import NavBar from "../../shared/components/NavBar.vue";
import { movieRoute } from "../router";

const routeLinks: RouterLink[] = movieRoute
  .children!.filter((route) => (route.props as { visible: boolean }).visible)
  .map((route) => {
    return {
      name: route.name as string,
      path: route.path,
      title: (route.props as { title: string; visible: boolean }).title,
    };
  });
</script>

<template>
  <NavBar :show-icon="false" :links="routeLinks" />
  <RouterView />
</template>

<style scoped></style>
