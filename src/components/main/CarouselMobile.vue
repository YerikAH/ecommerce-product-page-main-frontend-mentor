<script setup>
import { ref, watch } from "vue";

import firstImage from "/src/assets/image_product_1.jpg";
import secondImage from "/src/assets/image-product-2.jpg";
import threeImage from "/src/assets/image-product-3.jpg";
import fourImage from "/src/assets/image-product-4.jpg";

const imageString = ref(firstImage);
let imageGuide = ref(1);

function nextImage() {
  if (imageGuide.value >= 4) {
    imageGuide.value = 1;
  } else {
    imageGuide.value = imageGuide.value + 1;
  }
}
function previousImage() {
  if (imageGuide.value <= 1) {
    imageGuide.value = 4;
  } else {
    imageGuide.value = imageGuide.value - 1;
  }
}

watch(imageGuide, (now, back) => {
  if (imageGuide.value === 1) {
    imageString.value = firstImage;
  } else if (imageGuide.value === 2) {
    imageString.value = secondImage;
  } else if (imageGuide.value === 3) {
    imageString.value = threeImage;
  } else if (imageGuide.value === 4) {
    imageString.value = fourImage;
  }
});
</script>
<template>
  <div class="carousel-image">
    <img class="carousel-image-img" v-bind:src="imageString" alt="image" />
    <button
      aria-label="next"
      class="carousel-button-next flex"
      @click="nextImage"
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </button>
    <button
      aria-label="previous"
      class="carousel-button-previous flex"
      @click="previousImage"
    >
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>
<style scoped>
.carousel-image path {
  transition: 0.3s;
}
.carousel-image button:hover path {
  stroke: var(--orange);
}
.carousel-image {
  position: relative;
  width: 100vw;
  height: 20rem;
}
.carousel-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.flex {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 15rem;
  background-color: var(--white);
}
.flex img {
  width: 12px;
  object-fit: contain;
}
.carousel-button-next {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 1rem;
}
.carousel-button-previous {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 1rem;
}
</style>
