<template>
  <v-app>
    <v-toolbar title="Mes petits travaux"></v-toolbar>
    <RouterView />

    <v-bottom-navigation grow :model-value="route.name">
      <v-btn @click="onClick('chantiers')" value="chantiers">
        <v-icon>fa-solid fa-person-digging</v-icon>
        <span>Chantiers</span>
      </v-btn>

      <v-btn @click="onClick('materiels')" value="materiels">
        <v-icon>fa-solid fa-hammer</v-icon>
        <span>Matériels</span>
      </v-btn>

      <v-btn @click="onClick('materiaux')" value="materiaux">
        <v-icon>fas fa-tree</v-icon>
        <span>Matériaux</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const onClick = (value: string) => router.push({ name: value });
</script>
