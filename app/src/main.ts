import { createApp } from "vue";
import App from "./App.vue";
import MesChantiers from "./views/MesChantiers.vue";
import Materiaux from "./views/Materiaux.vue";
import Materiels from "./views/Materiels.vue";
import AjoutChantier from "./views/AjoutChantier.vue";

import "./style.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@fortawesome/fontawesome-free/css/all.css";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createRouter, createWebHistory } from "vue-router";
import { aliases, fa } from "vuetify/iconsets/fa";
import ChantierItem from "./views/ChantierItem.vue";
import NotFound from "./components/NotFound.vue";
import AjoutMateriel from "./views/AjoutMateriel.vue";
import MaterielItem from "./views/MaterielItem.vue";

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: "fr",
  },
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
  {
    path: "/chantiers",
    component: MesChantiers,
    name: "chantiers",
  },
  {
    path: "/add-chantiers",
    name: "addChantier",
    component: AjoutChantier,
  },
  {
    path: "/chantiers/:id",
    name: "chantierItem",
    component: ChantierItem,
  },
  { path: "/materiels", component: Materiels, name: "materiels" },
  {
    path: "/add-materiels",
    name: "addMateriel",
    component: AjoutMateriel,
  },
  {
    path: "/materiels/:id",
    name: "materielItem",
    component: MaterielItem,
  },
  { path: "/materiaux", component: Materiaux, name: "materiaux" },
  { path: "/", redirect: "/chantiers" },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(vuetify).mount("#app");
