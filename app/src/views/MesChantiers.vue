<template>
  <ListChantiers :chantiers="chantiers" />

  <v-btn color="grey" class="addButton" @click="push({ name: 'addChantier' })"
    >Ajouter un chantier</v-btn
  >
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chantier } from "../types/Chantier";
import { getAllChantiers } from "../services/ChantiersService";
import { useRouter } from "vue-router";
import ListChantiers from "../components/ListChantiers.vue";

const chantiers = ref<Chantier[]>([]);
const { push } = useRouter();

onMounted(() => {
  getAllChantiers().then((data) => {
    // Que les chantiers non terminés
    chantiers.value = data.filter((chantier) => chantier.state !== "done");
  });
});
</script>

<style scoped>
.addButton {
  margin-left: 50vw;
  transform: translateX(-50%);
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
