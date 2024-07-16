<template>
  <v-form class="form" @submit.prevent>
    <v-text-field v-model="name" label="Nom du travail"></v-text-field>

    <v-text-field v-model="description" label="Description"></v-text-field>

    <v-switch
      v-model="parProfessionnel"
      label="Fait par professionnel"
      color="green"
    ></v-switch>

    <div class="buttons">
      <v-btn @click="emit('cancel')">Annuler</v-btn>
      <v-btn @click="onValidate" type="submit">Valider</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Travail, TravailForm } from "../types/Travail";

const props = defineProps<{
  defaultValue?: Travail;
}>();

const name = ref(props.defaultValue?.name);
const description = ref(props.defaultValue?.description);
const parProfessionnel = ref(props.defaultValue?.parProfessionnel);

const onValidate = () => {
  if (!name.value) {
    return;
  }

  emit("validate", {
    name: name.value,
    description: description.value,
    parProfessionnel: !!parProfessionnel.value,
  });
};

const emit = defineEmits<{
  (e: "validate", value: Omit<TravailForm, "chantierId">): void;
  (e: "cancel"): void;
}>();
</script>

<style scoped>
.form {
  margin-left: 2vw;
  margin-right: 2vw;
}

.buttons {
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
