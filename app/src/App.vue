<template>
  <v-app>
    <v-app-bar style="text-align: center; background-color: #b1e4e6fd;" title="Mes petits travaux"></v-app-bar>

    <div class="content">
      <RouterView />
    </div>

    <v-bottom-navigation style="background-color: lightgray;" grow :model-value="route.name">
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

<style scoped>
.content {
  height: calc(100vh - 56px - 56px);
  margin-top: 56px; /* Header */
  margin-bottom: 56px; /* Bottom navigation */
  overflow: auto;
}

</style>
