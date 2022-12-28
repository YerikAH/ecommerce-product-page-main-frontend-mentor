<script setup></script>
<template>
  <div class="product_buttons">
    <div class="button_interact">
      <button class="button_decrement">-</button>
      <p class="">0</p>
      <button class="button_increment">+</button>
    </div>
    <div class="button_add_cart">
      <button>
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
}
.button_interact button {
  color: var(--orange);
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  font-size: 2rem;
  background-color: transparent;
  width: 5rem;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
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
}
@media (min-width: 810px) {
  .product_buttons {
    flex-direction: row;
  }
}
</style>
