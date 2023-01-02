<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import MainComponent from "./components/MainComponent.vue";

const productCart = ref([
  {
    id: "pc-15",
    name: "Full Limited Edition Sneakers",
    price: 125,
    img: "/src/assets/image-product-1-thumbnail.jpg",
    count: "5",
  },
]);
function newProduct(n) {
  const [id, name, price, img, count] = n;
  const newProductObj = {
    id: id,
    name: name,
    price: price,
    img: img,
    count: count,
  };
  productCart.value.push(newProductObj);
  console.log(newProductObj);
}
</script>

<template>
  <Header />
  <MainComponent @event-main="(n) => newProduct(n)" />
  <div class="test" v-for="(item, i) in productCart" :key="i">
    {{ item.name }}
    {{ item.id }}
    {{ item.price }}
    {{ item.count }}
  </div>
</template>

<style scoped></style>
