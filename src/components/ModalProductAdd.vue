<script setup></script>
<template>
  <div class="modal-product-add">
    <div class="cart-products">
      <h4>Cart</h4>
      <div class="items-product">
        <p>Your cart is empty</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-product-add {
  width: 100vw;
  height: auto;
  padding: 2rem 0.4rem;
  position: fixed;
  left: 0;
  margin-top: 3rem;
  z-index: 100;
  top: 0;
}
.cart-products {
  background-color: var(--white);
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
}
.cart-products h4 {
  font-size: 1rem;
  color: var(--very-dark-blue);
  padding: 0 0 1rem 0rem;
  border-bottom: 1px solid var(--grayish-blue);
}
.items-product {
  height: 8rem;
}
</style>
