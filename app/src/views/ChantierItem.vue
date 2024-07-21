<template>
  <p class="title" v-if="chantier">{{ chantier?.name }}</p>

  <div v-if="editionMode">
    <ChantierFormComponent
      :default-value="chantier"
      @cancel="editionMode = false"
      @validate="onValidateEdition"
    />
  </div>

  <div v-else class="center-text">
    <p v-if="chantier">Description : {{ chantier.description }}</p>
    <p v-if="chantier">
      Date estimée : {{ dayjs(chantier.estimatedDate).format("DD/MM/YYYY") }}
    </p>

    <v-card-text>
      <span>Par pro : </span>
      <v-icon icon>{{
        chantier?.parProfessionnel
          ? "fa-solid fa-circle-check"
          : "fa-solid fa-circle-xmark"
      }}</v-icon>
    </v-card-text>
  </div>

  <div>
    <p class="subTitle">Matériels nécessaires :</p>

    <v-list lines="one">
      <v-list-item
        v-for="materiel in chantier?.listMateriels"
        :key="materiel"
        :title="getNameMaterielFromId(materiel)"
      ></v-list-item>
    </v-list>
  </div>

  <div v-if="chantier && !editionMode" class="buttons">
    <v-btn color="grey" @click="onDelete">Supprimer</v-btn>
    <v-btn color="grey" @click="editionMode = true">Editer</v-btn>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import dayjs from "dayjs";
import { useRoute, useRouter } from "vue-router";
import { Chantier, ChantierForm } from "../types/Chantier";
import {
  deleteChantier,
  editChantier,
  getChantier,
} from "../services/ChantiersService";
import ChantierFormComponent from "../components/ChantierFormComponent.vue";
import { Materiel } from "../types/Materiel";
import { getAllMateriels } from "../services/MaterielsService";

const { params } = useRoute();
const { push } = useRouter();
const chantier = ref<Chantier>();
const editionMode = ref(false);
const availableMateriels = ref<Materiel[]>([]);

onMounted(async () => {
  if (params.id) {
    chantier.value = await getChantier(params.id as string);
    availableMateriels.value = await getAllMateriels();
  }
});

const getNameMaterielFromId = (id: string) =>
  availableMateriels.value.find((m) => m._id === id)?.name;

const onValidateEdition = async (form: ChantierForm) => {
  editionMode.value = false;
  try {
    const editedChantier = await editChantier(chantier.value?._id!, form);
    chantier.value = editedChantier;
    console.log("Chantier édité : ", editedChantier);
  } catch (e) {
    console.error("Une erreur est survenue à l'édition d'un chantier", e);
  }
};

const onDelete = async () => {
  try {
    const deletedChantier = await deleteChantier(chantier.value?._id!);
    console.log("Chantier supprimé : ", deletedChantier);
    push({ name: "chantiers" });
  } catch (e) {
    console.error("Une erreur est survenue à la suppression d'un chantier", e);
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
