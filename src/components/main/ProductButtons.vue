<script setup>
import { ref } from "vue";
import { caclDescount, increDecre } from "../../helpers/operators";

const countProduct = ref(1);
const emit = defineEmits(["eventButtons"]);

function addToCart(e) {
  let eventClick;
  if (e.target.tagName === "IMG") {
    eventClick = e.target.parentElement;
  } else {
    eventClick = e.target;
  }
  // If we consume a product API and create attributes with relevant content on the Add Cart button
  const nameProduct = eventClick.getAttribute("name-product");
  const priceProduct = eventClick.getAttribute("price-product");
  const imageProduct = eventClick.getAttribute("image-product");
  const idProduct = eventClick.getAttribute("id-product");
  const descountProduct = eventClick.getAttribute("descount-product");
  const priceReal = caclDescount(
    parseFloat(priceProduct),
    parseFloat(descountProduct)
  );

  const n = [
    idProduct,
    nameProduct,
    priceReal,
    imageProduct,
    countProduct.value.toString(),
  ];
  emit("eventButtons", n);

  countProduct.value = 1;
}
function editCount(increment) {
  const newValue = increDecre(countProduct.value, increment);
  countProduct.value =
    newValue > 20 || newValue <= 0 ? countProduct.value : newValue;
}
</script>
<template>
  <div class="product_buttons">
    <div class="button_interact">
      <button class="button_decrement" @click="() => editCount(false)">
        <svg
          width="12"
          height="4"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
              id="a"
            />
          </defs>
          <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
        </svg>
      </button>

      <p class="">{{ countProduct }}</p>

      <button class="button_increment" @click="() => editCount(true)">
        <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
              id="b"
            />
          </defs>
          <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
        </svg>
      </button>
    </div>
    <div class="button_add_cart">
      <button
        @click="addToCart"
        name-product="Full Limited Edition Sneakers"
        price-product="250"
        image-product="src/assets/image-product-1-thumbnail.jpg"
        id-product="pc-045"
        descount-product="50"
      >
        <img src="/src/assets/icon-cart-white.svg" alt="cart" />
        Add to cart
      </button>
    </div>
  </div>
</template>
<style scoped>
.product_buttons {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}
.button_interact {
  background-color: var(--light-grayish-blue);
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}
.button_interact button {
  color: var(--orange);
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  width: 5rem;
  display: flex;
  margin: 0.5rem 0;
  justify-content: center;
  align-items: center;
}
.button_interact button use {
  transition: 0.3s;
}
.button_interact button:hover use {
  fill: var(--hover-orange);
}
.button_interact p {
  color: var(--very-dark-blue);
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
}
.button_add_cart button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 1rem;
  background-color: var(--orange);
  border-radius: 0.5rem;
  outline: none;
  border: none;
  width: 100%;
  padding: 1rem 0;
  font-weight: 700;
  gap: 1rem;
  margin-top: 1rem;
  transition: 0.3s;
  box-shadow: 2px 8px 20px rgba(255, 125, 26, 0.2);
}
.button_add_cart button:hover {
  background-color: var(--hover-orange);
}
@media (min-width: 1024px) {
  .product_buttons {
    display: grid;
    grid-template-columns: 10rem auto;
    gap: 1rem;
    padding: 0;
  }
  .product_buttons {
    margin-top: 1rem;
  }
  .button_interact {
    width: 10rem;
    padding: 0;
  }
  .button_add_cart button {
    margin: 0;
    width: 100%;
    padding: 1rem 2rem;
  }
}
</style>
