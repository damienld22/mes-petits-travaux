<template>
  <p class="state" :style="computedStyle">{{ state }}</p>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Chantier } from "../types/Chantier";

const props = defineProps<{
  chantier: Chantier;
}>();

const state = computed(() => {
  switch (props.chantier.state) {
    case "done":
      return "Terminé";
    case "inProgress":
      return "En cours";
    case "todo":
      return "À faire";
    default:
      return "À faire";
  }
});

const computedStyle = computed(() => {
  switch (props.chantier.state) {
    case "done":
      return "color: green;";
    case "inProgress":
      return "color: orange;";
    case "todo":
      return "color: darkred;";
    default:
      return "color: darkred;";
  }
});
</script>

<style scoped>
.state {
  text-align: end;
  margin-right: 2vw;
  font-size: 0.8em;
  font-style: italic;
}
</style>
