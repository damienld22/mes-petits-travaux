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

    <v-select
      v-if="props.defaultValue"
      v-model="state"
      label="État"
      :items="availableEtats"
      item-title="text"
      item-value="value"
    ></v-select>

    <v-autocomplete
      v-model="materiels"
      :items="availableMateriels"
      color="blue-grey-lighten-2"
      item-title="name"
      item-value="_id"
      label="Matériels nécessaires"
      chips
      closable-chips
      multiple
    >
      <template v-slot:chip="{ props, item }">
        <v-chip v-bind="props" :text="item.raw.name"></v-chip>
      </template>

      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props" :title="item.raw.name"></v-list-item>
      </template>
    </v-autocomplete>

    <div class="buttons">
      <v-btn @click="emit('cancel')">Annuler</v-btn>
      <v-btn @click="onValidate" type="submit">Valider</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Chantier, ChantierForm, ChantierState } from "../types/Chantier";
import { VDateInput } from "vuetify/labs/VDateInput";
import dayjs from "dayjs";
import { Materiel } from "../types/Materiel";
import { getAllMateriels } from "../services/MaterielsService";

const props = defineProps<{
  defaultValue?: Chantier;
}>();

const name = ref(props.defaultValue?.name);
const description = ref(props.defaultValue?.description);
const estimatedDate = ref(
  dayjs(props.defaultValue?.estimatedDate, "YYYY-MM-DD").toDate()
);
const parProfessionnel = ref(props.defaultValue?.parProfessionnel);
const availableMateriels = ref<Materiel[]>([]);
const materiels = ref<string[]>(props.defaultValue?.listMateriels || []);
const state = ref<ChantierState>(props.defaultValue?.state || "todo");

const availableEtats = [
  {
    value: "todo",
    text: "À faire",
  },
  {
    value: "inProgress",
    text: "En cours",
  },
  {
    value: "done",
    text: "Terminé",
  },
];

onMounted(async () => {
  availableMateriels.value = await getAllMateriels();
});

const onValidate = () => {
  if (!name.value || !estimatedDate.value) {
    return;
  }

  emit("validate", {
    name: name.value,
    description: description.value,
    estimatedDate: dayjs(estimatedDate.value).format("YYYY-MM-DD"),
    parProfessionnel: !!parProfessionnel.value,
    listMateriels: materiels.value,
    state: state.value,
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
