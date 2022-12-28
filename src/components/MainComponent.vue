<script setup>
import CarouselDesktop from "./CarouselDesktop.vue";
import CarouselMobile from "./CarouselMobile.vue";
import InfoProductVue from "./InfoProduct.vue";
</script>
<template>
  <div class="main">
    <div class="main-content">
      <div class="mobile_main">
        <CarouselMobile />
      </div>
      <div class="desktop_main">
        <CarouselDesktop />
      </div>
      <InfoProductVue />
    </div>
  </div>
</template>
<style scoped>
.desktop_main {
  display: none;
}
.main {
  place-items: center;
  display: grid;
  width: 100%;
}
.main-content {
  max-width: 69.25rem;
  width: 100%;
}
@media (min-width: 810px) {
  .mobile_main {
    display: none;
  }
  .desktop_main {
    display: block;
  }
  .main-content {
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: center;
    align-items: center;
  }
  .main {
    padding: 7rem 0;
  }
}
</style>
