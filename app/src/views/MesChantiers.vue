<template>
  <v-card class="card" elevated v-for="chantier of chantiers">
    <v-card-title>{{ chantier.name }}</v-card-title>
    <v-card-text v-if="chantier.description">{{
      chantier.description
    }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chantier } from "../types/Chantier";
import { getAllChantiers } from "../services/ChantiersService";

const chantiers = ref<Chantier[]>([]);

onMounted(() => {
  getAllChantiers().then((data) => {
    chantiers.value = data;
  });
});
</script>

<style scoped>
.card {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
</style>
