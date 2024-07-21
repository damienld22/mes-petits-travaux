<template>
  <v-form class="form" @submit.prevent>
    <v-text-field v-model="name" label="Nom du chantier"></v-text-field>

    <v-text-field v-model="description" label="Description"></v-text-field>

    <v-date-input
      label="Date de démarrage estimée"
      v-model="estimatedDate"
    ></v-date-input>

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
import { Chantier, ChantierForm } from "../types/Chantier";
import { VDateInput } from "vuetify/labs/VDateInput";
import dayjs from "dayjs";

const props = defineProps<{
  defaultValue?: Chantier;
}>();

const name = ref(props.defaultValue?.name);
const description = ref(props.defaultValue?.description);
const estimatedDate = ref(
  dayjs(props.defaultValue?.estimatedDate, "YYYY-MM-DD").toDate()
);
const parProfessionnel = ref(props.defaultValue?.parProfessionnel);

const onValidate = () => {
  if (!name.value || !estimatedDate.value) {
    return;
  }

  emit("validate", {
    name: name.value,
    description: description.value,
    estimatedDate: dayjs(estimatedDate.value).format("YYYY-MM-DD"),
    parProfessionnel: !!parProfessionnel.value,
  });
};

const emit = defineEmits<{
  (e: "validate", value: ChantierForm): void;
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
