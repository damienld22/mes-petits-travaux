<template>
  <div class="container">
    <div class="buttons" v-if="picture">
      <v-btn @click="onClean">Annuler</v-btn>
      <v-btn @click="onValidate">Valider</v-btn>
      <input type="color" v-model="color" />
    </div>
    <input
      v-if="!picture"
      type="file"
      accept="image/*"
      :value="picture"
      @change="onFileChange"
    />
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const picture = ref<File | null>(null);
const canvas = ref<HTMLCanvasElement>();
const coord = ref({ x: 0, y: 0 });
const color = ref("#FF0000");

const draw = (event: TouchEvent) => {
  const context = canvas.value!.getContext("2d")!;
  if (event.cancelable) {
    event.preventDefault();
  }
  context.beginPath();
  context.lineWidth = 5;
  context.lineCap = "round";
  context.strokeStyle = color.value;
  context.moveTo(coord.value.x, coord.value.y);
  reposition(event);
  context.lineTo(coord.value.x, coord.value.y);
  context.stroke();
};

const reposition = (event: TouchEvent) => {
  const rect = canvas.value!.getBoundingClientRect();
  console.log("==> clientX  :", event.touches[0].clientX);
  coord.value.x =
    (event.touches[0].clientX - rect.left) / (rect.width / canvas.value!.width);
  coord.value.y =
    (event.touches[0].clientY - rect.top) /
    (rect.height / canvas.value!.height);
  // coord.value.x = event.touches[0].clientX - canvas.value!.offsetLeft;
  // coord.value.y = event.touches[0].clientY - canvas.value!.offsetTop;
};

const start = (event: TouchEvent) => {
  if (!picture.value) {
    return;
  }
  canvas.value!.addEventListener("touchmove", draw, { passive: false });
  reposition(event);
};
const stop = () => {
  if (!picture.value) {
    return;
  }
  canvas.value!.removeEventListener("touchmove", draw);
};

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    picture.value = file;
    console.log(picture.value);
  }
};

const onClean = () => {
  picture.value = null;
  canvas.value
    ?.getContext("2d")
    ?.clearRect(0, 0, canvas.value.width, canvas.value.height);
};

const onValidate = () => {
  if (canvas.value) {
    const link = document.createElement("a");
    link.setAttribute("download", `image-${Date.now()}.png`);
    link.setAttribute(
      "href",
      canvas.value
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();
  }

  onClean();
};

onMounted(() => {
  document.addEventListener("touchstart", start, { passive: false });
  document.addEventListener("touchend", stop, { passive: false });

  return () => {
    document.removeEventListener("touchstart", start);
    document.removeEventListener("touchend", stop);
  };
});

watch(
  () => picture.value,
  () => {
    if (picture.value && canvas.value) {
      const context = canvas.value.getContext("2d");
      const baseImage = new Image();
      baseImage.src = URL.createObjectURL(picture.value!);
      baseImage.onload = () => {
        canvas.value!.width = baseImage.width;
        canvas.value!.height = baseImage.height;
        context?.drawImage(baseImage, 0, 0);
      };
    }
  }
);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

canvas {
  max-width: 90vw;
  max-height: 90vh;
}

.buttons {
  margin-bottom: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
