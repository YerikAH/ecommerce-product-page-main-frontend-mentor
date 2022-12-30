<script setup>
import { ref, watch } from "vue";

const primaryImage = ref("/src/assets/image_product_1.jpg");
const props = defineProps(["imageSelect", "showModal"]);
const imageSelectTwoModal = ref(props.imageSelect);
const firstButtonStyles = ref({});
const secondButtonStyles = ref({});
const thirdButtonStyles = ref({});
const fourtButtonStyles = ref({});
const selectStyle = {
  background: "hsla(25.2, 100%, 93.9%, 0.70)",
  border: "3px solid var(--orange)",
};
function changeImage(e) {
  if (e.target.tagName === "IMG" || e.target.tagName === "DIV") {
    let fatherImage = e.target.parentElement;
    imageSelectTwoModal.value = fatherImage.value;
  } else {
    imageSelectTwoModal.value = e.target.value;
  }
}
setInterval(() => {
  if (!props.showModal) {
    imageSelectTwoModal.value = props.imageSelect;
  }
}, 500);
watch(imageSelectTwoModal, (now, back) => {
  if (imageSelectTwoModal.value === "1") {
    primaryImage.value = "/src/assets/image_product_1.jpg";
    voidStyles();
    firstButtonStyles.value = selectStyle;
  } else if (imageSelectTwoModal.value === "2") {
    primaryImage.value = "/src/assets/image-product-2.jpg";
    voidStyles();
    secondButtonStyles.value = selectStyle;
  } else if (imageSelectTwoModal.value === "3") {
    primaryImage.value = "/src/assets/image-product-3.jpg";
    voidStyles();
    thirdButtonStyles.value = selectStyle;
  } else if (imageSelectTwoModal.value === "4") {
    primaryImage.value = "/src/assets/image-product-4.jpg";
    voidStyles();
    fourtButtonStyles.value = selectStyle;
  }
});

function voidStyles() {
  firstButtonStyles.value = {};
  secondButtonStyles.value = {};
  thirdButtonStyles.value = {};
  fourtButtonStyles.value = {};
}
// initial state
firstButtonStyles.value = selectStyle;
</script>
<template>
  <div class="modal_app">
    <div class="modal_app-grid">
      <div class="app_close-modal">
        <button
          class="close-modal"
          @click="$emit('eventSwitch')"
          aria-label="close modal"
        >
          <img src="/src/assets/icon-close.svg" alt="close modal" />
        </button>
      </div>
      <div class="carousel_desktop_image">
        <img v-bind:src="primaryImage" alt="image" />
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
  </div>
</template>
<style scoped>
.close-modal {
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  width: 1.2rem;
}
.close-modal img {
  width: 100%;
}
.app_close-modal {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
}
.modal_app-grid {
  display: grid;
  place-items: center;
  position: relative;
}
.modal_app {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  padding: 2rem 1rem;
  overflow-y: auto;
}
html {
  overflow: hidden;
}
.carousel_desktop_switch {
  display: flex;
  margin-top: 3rem;
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
  max-width: 33.125rem;
  max-height: 33.125rem;
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
