<template>
  <p class="title" v-if="materiel">{{ materiel?.name }}</p>

  <div v-if="editionMode">
    <MaterielFormComponent
      :default-value="materiel"
      @cancel="editionMode = false"
      @validate="onValidateEdition"
    />
  </div>

  <div v-else class="center-text">
    <v-card-text v-if="materiel">
      <span>Possédé : </span>
      <v-icon icon>{{
        materiel.isPossessed
          ? "fa-solid fa-circle-check"
          : "fa-solid fa-circle-xmark"
      }}</v-icon>
    </v-card-text>

    <v-card-text v-if="materiel && !materiel.isPossessed">
      <span>Où aller chercher : {{ materiel.whereCollect }}</span>
    </v-card-text>

    <v-card-text v-if="materiel && materiel.price">
      <span>Prix : {{ materiel.price }}€</span>
    </v-card-text>
  </div>

  <div v-if="materiel && !editionMode" class="buttons">
    <v-btn color="grey" @click="onDelete">Supprimer</v-btn>
    <v-btn color="grey" @click="editionMode = true">Editer</v-btn>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Materiel, MaterielForm } from "../types/Materiel";
import MaterielFormComponent from "../components/MaterielFormComponent.vue";
import {
  deleteMateriel,
  editMateriel,
  getMateriel,
} from "../services/MaterielsService";

const { params } = useRoute();
const { push } = useRouter();
const materiel = ref<Materiel>();
const editionMode = ref(false);

onMounted(async () => {
  if (params.id) {
    materiel.value = await getMateriel(params.id as string);
  }
});

const onValidateEdition = async (form: MaterielForm) => {
  editionMode.value = false;
  try {
    const edited = await editMateriel(materiel.value?._id!, form);
    materiel.value = edited;
    console.log("Materiel édité : ", edited);
  } catch (e) {
    console.error("Une erreur est survenue à l'édition d'un materiel", e);
  }
};

const onDelete = async () => {
  try {
    const deleted = await deleteMateriel(materiel.value?._id!);
    console.log("Materiel supprimé : ", deleted);
    push({ name: "materiels" });
  } catch (e) {
    console.error("Une erreur est survenue à la suppression d'un materiel", e);
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 5vh;
  font-size: 1.8em;
}

.subTitle {
  font-size: 1.2em;
  margin-left: 5vw;
  margin-top: 2vh;
  font-style: italic;
  text-decoration: underline;
  text-align: center;
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

.center-text {
  text-align: center;
}
</style>
