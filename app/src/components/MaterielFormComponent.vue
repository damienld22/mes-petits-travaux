<template>
  <v-form class="form" @submit.prevent>
    <v-text-field v-model="name" label="Nom du matériel"></v-text-field>

    <v-switch
      v-model="isPossessed"
      label="Déjà possédé ?"
      color="green"
    ></v-switch>

    <v-text-field
      v-if="!isPossessed"
      v-model="whereCollect"
      label="Où aller chercher ?"
    ></v-text-field>
    <v-text-field
      v-if="!isPossessed"
      v-model="price"
      type="number"
      label="Prix"
    ></v-text-field>

    <div class="buttons">
      <v-btn @click="emit('cancel')">Annuler</v-btn>
      <v-btn @click="onValidate" type="submit">Valider</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Materiel, MaterielForm } from "../types/Materiel";

const props = defineProps<{
  defaultValue?: Materiel;
}>();

const name = ref(props.defaultValue?.name);
const isPossessed = ref(props.defaultValue?.isPossessed);
const whereCollect = ref(props.defaultValue?.whereCollect);
const price = ref(props.defaultValue?.price);

const onValidate = () => {
  if (!name.value) {
    return;
  }

  emit("validate", {
    name: name.value,
    isPossessed: isPossessed.value,
    whereCollect: isPossessed.value ? undefined : whereCollect.value,
    price: price.value,
  });
};

const emit = defineEmits<{
  (e: "validate", value: MaterielForm): void;
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
