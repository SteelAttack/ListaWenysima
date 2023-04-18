import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { VueQueryPlugin } from "@tanstack/vue-query";

import "./assets/main.css";
import "flowbite";
import { createPinia } from "pinia";
import { initFlowbite } from "flowbite";

const pinia = createPinia();

const app = createApp(App);
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120, // 2 minutes
        refetchOnReconnect: "always",
      },
    },
  },
});

app.use(pinia);
app.use(initFlowbite);
app.use(router);

app.mount("#app");
