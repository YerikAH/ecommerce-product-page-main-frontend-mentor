<script setup>
import CarouselMobile from "./CarouselMobile.vue";
import InfoProductVue from "./InfoProduct.vue";
</script>
<template>
  <div class="main">
    <div class="mobile_main">
      <CarouselMobile />
    </div>
    <div class="desktop_main"></div>
    <InfoProductVue />
  </div>
</template>
<style scoped>
.desktop_main {
  display: none;
}
@media (min-width: 720px) {
  .mobile_main {
    display: none;
  }
  .desktop_main {
    display: block;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
}
</style>
