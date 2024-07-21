<template>
  <v-card
    class="card"
    elevated
    v-for="materiel of materiels"
    @click="push({ name: 'materielItem', params: { id: materiel._id } })"
  >
    <v-card-title>{{ materiel.name }}</v-card-title>

    <v-card-text>
      <span>Possédé : </span>
      <v-icon icon>{{
        materiel.isPossessed
          ? "fa-solid fa-circle-check"
          : "fa-solid fa-circle-xmark"
      }}</v-icon>
    </v-card-text>

    <v-card-text v-if="!materiel.isPossessed">
      <span>Où aller chercher : {{ materiel.whereCollect }}</span>
    </v-card-text>

    <v-card-text v-if="materiel.price">
      <span>Prix : {{ materiel.price }}€</span>
    </v-card-text>
  </v-card>

  <v-btn color="grey" class="addButton" @click="push({ name: 'addMateriel' })"
    >Ajouter un materiel</v-btn
  >
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Materiel } from "../types/Materiel";
import { getAllMateriels } from "../services/MaterielsService";
import { useRouter } from "vue-router";

const { push } = useRouter();
const materiels = ref<Materiel[]>([]);

onMounted(() => {
  getAllMateriels().then((data) => {
    materiels.value = data;
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
