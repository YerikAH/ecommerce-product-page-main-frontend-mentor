<script setup>
import { ref } from "vue";
import Header from "./components/header/Header.vue";
import MainComponent from "./components/main/MainComponent.vue";

const productCart = ref([]);
function newProduct(n) {
  const [idN, nameN, priceN, imgN, countN] = n;
  const newProductObj = {
    id: idN,
    name: nameN,
    price: priceN,
    img: imgN,
    count: countN,
  };
  let copyCart = [...productCart.value];
  let changeValue = copyCart.find((item) => item.id === newProductObj.id);
  if (changeValue === undefined) {
    productCart.value.push(newProductObj);
  } else {
    changeValue.count = `${
      parseInt(changeValue.count) + parseInt(newProductObj.count)
    }`;
    productCart.value = copyCart;
  }
}
function deleteProduct(id) {
  let copyCart = [...productCart.value];
  let varTemp = copyCart.filter((item) => item.id !== id);
  productCart.value = varTemp;
}
</script>

<template>
  <Header
    :productCart="productCart"
    @event-header="(id) => deleteProduct(id)"
  />
  <MainComponent @event-main="(n) => newProduct(n)" />
</template>

<style scoped></style>
