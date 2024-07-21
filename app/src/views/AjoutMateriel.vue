<template>
  <p class="title">Ajout d'un matériel</p>

  <MaterielFormComponent
    @cancel="push({ name: 'materiels' })"
    @validate="onValidate"
  />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { createMateriel } from "../services/MaterielsService";
import MaterielFormComponent from "../components/MaterielFormComponent.vue";
import { MaterielForm } from "../types/Materiel";

const { push } = useRouter();

const onValidate = async (value: MaterielForm) => {
  try {
    const created = await createMateriel(value);
    console.log("Materiel créé : ", created);
    push({ name: "materiels" });
  } catch (e) {
    console.error("Une erreur est survenue à la création d'un materiel", e);
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
