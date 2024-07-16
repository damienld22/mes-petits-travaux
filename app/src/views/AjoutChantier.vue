<template>
  <p class="title">Ajout d'un chantier</p>

  <ChantierFormComponent
    @cancel="push({ name: 'chantiers' })"
    @validate="onValidate"
  />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { createChantier } from "../services/ChantiersService";
import ChantierFormComponent from "../components/ChantierFormComponent.vue";
import { ChantierForm } from "../types/Chantier";

const { push } = useRouter();

const onValidate = async (value: ChantierForm) => {
  try {
    const createdChantier = await createChantier(value);
    console.log("Chantier créé : ", createdChantier);
    push({ name: "chantiers" });
  } catch (e) {
    console.error("Une erreur est survenue à la création d'un chantier", e);
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
