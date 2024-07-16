<template>
  <p class="title" v-if="chantier">{{ chantier?.name }}</p>

  <div v-if="editionMode">
    <ChantierFormComponent
      :default-value="chantier"
      @cancel="editionMode = false"
      @validate="onValidateEdition"
    />
  </div>

  <div v-else>
    <p v-if="chantier">{{ chantier.description }}</p>
    <p v-if="chantier">
      Date estimée : {{ dayjs(chantier?.estimatedDate).format("DD/MM/YYYY") }}
    </p>
  </div>

  <div v-if="chantier && !editionMode" class="buttons">
    <v-btn @click="onDelete">Supprimer</v-btn>
    <v-btn @click="editionMode = true">Editer</v-btn>
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

const { params } = useRoute();
const { push } = useRouter();
const chantier = ref<Chantier>();
const editionMode = ref(false);

onMounted(async () => {
  if (params.id) {
    chantier.value = await getChantier(params.id as string);
  }
});

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
  font-size: 1.6em;
}

.buttons {
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
