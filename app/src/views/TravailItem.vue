<template>
  <div class="titleContainer">
    <v-icon icon="fa fa-solid fa-arrow-left" @click="back()"></v-icon>
    <p class="title" v-if="travail">{{ travail?.name }}</p>
    <span></span>
  </div>

  <div v-if="editionMode">
    <TravailFormComponent
      :default-value="travail"
      @cancel="editionMode = false"
      @validate="onValidateEdition"
    />
  </div>

  <div v-else>
    <p v-if="travail">{{ travail.description }}</p>
    <v-switch
      v-if="travail"
      v-model="travail.parProfessionnel"
      readonly
      label="Fait par professionnel"
      color="green"
    ></v-switch>
  </div>

  <div v-if="travail && !editionMode" class="buttons">
    <v-btn @click="onDelete">Supprimer</v-btn>
    <v-btn @click="editionMode = true">Editer</v-btn>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Travail, TravailForm } from "../types/Travail";
import {
  deleteTravail,
  editTravail,
  getTravail,
} from "../services/TravauxService";
import TravailFormComponent from "../components/TravailFormComponent.vue";

const { params } = useRoute();
const { back } = useRouter();
const travail = ref<Travail>();
const editionMode = ref(false);

onMounted(async () => {
  if (params.id) {
    travail.value = await getTravail(params.id as string);
  }
});

const onValidateEdition = async (form: Omit<TravailForm, "chantierId">) => {
  editionMode.value = false;
  try {
    const travailEdited = await editTravail(travail.value?._id!, form);
    travail.value = travailEdited;
    console.log("Travail édité : ", travailEdited);
  } catch (e) {
    console.error("Une erreur est survenue à l'édition d'un travail", e);
  }
};

const onDelete = async () => {
  try {
    const deletedTravail = await deleteTravail(travail.value?._id!);
    console.log("Travail supprimé : ", deletedTravail);
    back();
  } catch (e) {
    console.error("Une erreur est survenue à la suppression d'un travail", e);
  }
};
</script>

<style scoped>
.titleContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 5vh;
  margin-left: 2vw;
  margin-right: 2vw;
  justify-content: space-between;
}

.title {
  text-align: center;
  font-size: 1.6em;
}

.buttons {
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.card {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
</style>
