<template>
  <v-card
    class="card"
    elevated
    v-for="chantier of sortedChantiers"
    @click="push({ name: 'chantierItem', params: { id: chantier._id } })"
  >
    <v-card-title>{{ chantier.name }}</v-card-title>

    <ChantierState :chantier="chantier" />

    <v-card-text v-if="chantier.description">{{
      chantier.description
    }}</v-card-text>
    <v-card-text
      >Date estimée :
      {{
        dayjs(chantier.estimatedDate, "YYYY-MM-DD").format("DD/MM/YYYY")
      }}</v-card-text
    >

    <v-card-text>
      <span>Par pro : </span>
      <v-icon icon>{{
        chantier.parProfessionnel
          ? "fa-solid fa-circle-check"
          : "fa-solid fa-circle-xmark"
      }}</v-icon>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Chantier } from "../types/Chantier";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
import ChantierState from "../components/ChantierState.vue";

const props = defineProps<{
  chantiers: Chantier[];
}>();

const { push } = useRouter();

const sortedChantiers = computed(() => {
  return props.chantiers.sort((a, b) => {
    return dayjs(a.estimatedDate).isBefore(dayjs(b.estimatedDate)) ? -1 : 1;
  });
});
</script>

<style scoped>
.card {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
</style>
