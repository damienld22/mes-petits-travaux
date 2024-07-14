import { createApp } from "vue";
import App from "./App.vue";
import MesChantiers from "./views/MesChantiers.vue";
import Materiaux from "./views/Materiaux.vue";
import Materiels from "./views/Materiels.vue";

import "./style.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@fortawesome/fontawesome-free/css/all.css";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createMemoryHistory, createRouter } from "vue-router";
import { aliases, fa } from "vuetify/iconsets/fa";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});

// Router
const routes = [
  { path: "/chantiers", component: MesChantiers, name: "chantiers" },
  { path: "/materiaux", component: Materiaux, name: "materiaux" },
  { path: "/materiels", component: Materiels, name: "materiels" },
  { path: "/", redirect: "/chantiers" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).use(vuetify).mount("#app");
