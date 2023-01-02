<script setup>
import ProductButtons from "./ProductButtons.vue";
import ProductPrice from "./ProductPrice.vue";
import ProductText from "./ProductText.vue";
const emit = defineEmits(["eventProduct"]);
function productClickButtons(n) {
  emit("eventProduct", n);
}
</script>
<template>
  <div class="product_contain">
    <ProductText />
    <ProductPrice />
    <ProductButtons @event-buttons="(n) => productClickButtons(n)" />
  </div>
</template>
<style scoped></style>
