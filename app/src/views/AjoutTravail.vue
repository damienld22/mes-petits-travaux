<template>
  <p class="title">Ajout d'un chantier</p>

  <TravailFormComponent @cancel="back()" @validate="onValidate" />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import TravailFormComponent from "../components/TravailFormComponent.vue";
import { TravailForm } from "../types/Travail";
import { createTravail } from "../services/TravauxService";

const { back } = useRouter();
const { params } = useRoute();

const onValidate = async (value: Omit<TravailForm, "chantierId">) => {
  try {
    const createdTravail = await createTravail({
      ...value,
      chantierId: params.id as string,
    });
    console.log("Travail créé : ", createdTravail);
    back();
  } catch (e) {
    console.error("Une erreur est survenue à la création d'un travail", e);
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 5vh;
  font-size: 1.6em;
}
</style>
