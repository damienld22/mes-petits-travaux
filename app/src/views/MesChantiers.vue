<template>
  <v-card
    class="card"
    elevated
    v-for="chantier of chantiers"
    @click="push({ name: 'chantierItem', params: { id: chantier._id } })"
  >
    <v-card-title>{{ chantier.name }}</v-card-title>
    <v-card-text v-if="chantier.description">{{
      chantier.description
    }}</v-card-text>
  </v-card>

  <v-btn class="addButton" @click="push({ name: 'addChantier' })"
    >Ajouter un chantier</v-btn
  >
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chantier } from "../types/Chantier";
import { getAllChantiers } from "../services/ChantiersService";
import { useRouter } from "vue-router";

const chantiers = ref<Chantier[]>([]);
const { push } = useRouter();

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

.addButton {
  margin-left: 50vw;
  transform: translateX(-50%);
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
