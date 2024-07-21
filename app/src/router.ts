import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./components/NotFound.vue";
import TravauxFinis from "./views/TravauxFinis.vue";
import MaterielItem from "./views/MaterielItem.vue";
import AjoutMateriel from "./views/AjoutMateriel.vue";
import Materiels from "./views/Materiels.vue";
import ChantierItem from "./views/ChantierItem.vue";
import AjoutChantier from "./views/AjoutChantier.vue";
import MesChantiers from "./views/MesChantiers.vue";
import Login from "./views/Login.vue";

// Router
const routes = [
  {
    path: "/login",
    component: Login,
    name: "login",
  },
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
  { path: "/travaux-finis", component: TravauxFinis, name: "travauxFinis" },
  { path: "/", redirect: "/chantiers" },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const hasApiKey = localStorage.getItem("apiKey");

  if (!hasApiKey && to.name !== "login") {
    return { name: "login" };
  }
});
