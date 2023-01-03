<script setup>
import { ref, watch } from "vue";
import { STYLE_SELECT } from "../../helpers/variables";
import { switchScroll } from "../../helpers/void";
import ModalDesktop from "../modal/ModalDesktop.vue";

const primaryImage = ref("/src/assets/image_product_1.jpg");
const imageSelect = ref("1");
const showModal = ref(false);

const firstButtonStyles = ref({});
const secondButtonStyles = ref({});
const thirdButtonStyles = ref({});
const fourtButtonStyles = ref({});

function changeImage(e) {
  if (e.target.tagName === "IMG" || e.target.tagName === "DIV") {
    let fatherImage = e.target.parentElement;
    imageSelect.value = fatherImage.value;
  } else {
    imageSelect.value = e.target.value;
  }
}
watch(imageSelect, (now, back) => {
  if (imageSelect.value === "1") {
    selectNewImage("/src/assets/image_product_1.jpg");
    firstButtonStyles.value = STYLE_SELECT;
  } else if (imageSelect.value === "2") {
    selectNewImage("/src/assets/image-product-2.jpg");
    secondButtonStyles.value = STYLE_SELECT;
  } else if (imageSelect.value === "3") {
    selectNewImage("/src/assets/image-product-3.jpg");
    thirdButtonStyles.value = STYLE_SELECT;
  } else if (imageSelect.value === "4") {
    selectNewImage("/src/assets/image-product-4.jpg");
    fourtButtonStyles.value = STYLE_SELECT;
  }
});
function switchModal() {
  showModal.value = !showModal.value;
  switchScroll(showModal.value);
}
function voidStyles() {
  firstButtonStyles.value = {};
  secondButtonStyles.value = {};
  thirdButtonStyles.value = {};
  fourtButtonStyles.value = {};
}
function selectNewImage(pathImage) {
  primaryImage.value = pathImage;
  voidStyles();
}
// Initial state
firstButtonStyles.value = STYLE_SELECT;
</script>
<template>
  <Teleport to="body">
    <ModalDesktop
      v-show="showModal"
      :imageSelect="imageSelect"
      :showModal="showModal"
      @event-switch="switchModal"
    />
  </Teleport>
  <div class="carousel_desktop">
    <div class="carousel_desktop_image">
      <img v-bind:src="primaryImage" alt="image" @click="switchModal" />
    </div>
    <div class="carousel_desktop_switch">
      <button value="1" class="c_d_switch_one" @click="changeImage">
        <img src="/src/assets/image-product-1-thumbnail.jpg" alt="image" />
        <div class="select-image" :style="firstButtonStyles"></div>
      </button>
      <button value="2" class="c_d_switch_one" @click="changeImage">
        <img src="/src/assets/image-product-2-thumbnail.jpg" alt="image" />
        <div class="select-image" :style="secondButtonStyles"></div>
      </button>
      <button value="3" class="c_d_switch_one" @click="changeImage">
        <img src="/src/assets/image-product-3-thumbnail.jpg" alt="image" />

        <div class="select-image" :style="thirdButtonStyles"></div>
      </button>
      <button value="4" class="c_d_switch_one" @click="changeImage">
        <img src="/src/assets/image-product-4-thumbnail.jpg" alt="image" />
        <div class="select-image" :style="fourtButtonStyles"></div>
      </button>
    </div>
  </div>
</template>
<style scoped>
.carousel_desktop_switch {
  display: flex;
  margin-top: 1rem;
  gap: 1.25rem;
}
.select-image {
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  border-radius: 1rem;
}
.c_d_switch_one {
  width: 6rem;
  height: 6rem;
  overflow: hidden;
  background: transparent;
  border: none;
  position: relative;
}
.c_d_switch_one img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}
.c_d_switch_one:hover div {
  transition: 0;
  border: none;
  background: hsla(25.2, 100%, 93.9%, 0.7);
}

.carousel_desktop_image {
  overflow: hidden;
  max-width: 28.125rem;
  max-height: 28.125rem;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
}
.carousel_desktop_image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
