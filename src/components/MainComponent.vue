<script setup>
import CarouselDesktop from "./CarouselDesktop.vue";
import CarouselMobile from "./CarouselMobile.vue";
import InfoProductVue from "./InfoProduct.vue";
const emit = defineEmits(["eventMain"]);
function happendProduct(n) {
  emit("eventMain", n);
}
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
      <InfoProductVue @event-product="(n) => happendProduct(n)" />
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
@media (min-width: 1024px) {
  .mobile_main {
    display: none;
  }
  .desktop_main {
    display: block;
  }
  .main-content {
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    gap: 8%;
    align-items: center;
  }
  .main {
    padding: 4rem 0;
  }
}
</style>
