<template>
  <div class="container">
    <p>Saisie de l'API Key</p>

    <v-text-field
      style="width: 80vw"
      v-model="apiKey"
      label="Clé d'API"
    ></v-text-field>
    <p v-if="isInvalid" style="color: red">Clé invalide</p>

    <v-btn color="grey" @click="onValidate">Valider</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { checkApiKey } from "../services/ApiKeyService";

const { push } = useRouter();

const apiKey = ref<string>("");
const isInvalid = ref<boolean>(false);

const onValidate = async () => {
  const isValidApiKey = await checkApiKey(apiKey.value);

  if (isValidApiKey) {
    localStorage.setItem("apiKey", apiKey.value);
    push("/");
  } else {
    isInvalid.value = true;
  }
};
</script>

<style scoped>
.container {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addButton {
  margin-left: 50vw;
  transform: translateX(-50%);
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
