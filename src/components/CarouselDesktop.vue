<script setup></script>
<template>
  <div class="carousel_desktop">
    <div class="carousel_desktop_image">
      <img src="/src/assets/image_product_1.jpg" alt="image" />
    </div>
    <div class="carousel_desktop_switch">
      <div class="c_d_switch_one">
        <img src="/src/assets/image-product-1-thumbnail.jpg" alt="image" />
      </div>
      <div class="c_d_switch_one">
        <img src="/src/assets/image-product-1-thumbnail.jpg" alt="image" />
      </div>
      <div class="c_d_switch_one">
        <img src="/src/assets/image-product-2-thumbnail.jpg" alt="image" />
      </div>
      <div class="c_d_switch_one">
        <img src="/src/assets/image-product-3-thumbnail.jpg" alt="image" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.carousel_desktop_switch {
  display: flex;
  margin-top: 1rem;
  gap: 1.25rem;
}
.c_d_switch_one {
  border-radius: 1rem;
  width: 6rem;
  height: 6rem;
  overflow: hidden;
}
.c_d_switch_one img {
  width: 100%;
  height: auto;
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
