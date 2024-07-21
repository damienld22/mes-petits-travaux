<template>
  <ListChantiers :chantiers="chantiers" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chantier } from "../types/Chantier";
import { getAllChantiers } from "../services/ChantiersService";
import ListChantiers from "../components/ListChantiers.vue";

const chantiers = ref<Chantier[]>([]);

onMounted(() => {
  getAllChantiers().then((data) => {
    // Que les chantiers terminés
    chantiers.value = data.filter((chantier) => chantier.state === "done");
  });
});
</script>
