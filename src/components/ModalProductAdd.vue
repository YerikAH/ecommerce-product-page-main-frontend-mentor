<script setup>
import { ref } from "vue";

const productCart = ref([
  {
    id: "pc-15",
    name: "Full Limited Edition Sneakers",
    price: 125,
    img: "/src/assets/image-product-1-thumbnail.jpg",
  },
]);
</script>
<template>
  <div class="modal-product-add">
    <div class="cart-products">
      <h4>Cart</h4>
      <div class="items-product">
        <p v-if="productCart === 0" class="items-product_empty">
          Your cart is empty
        </p>
        <div
          v-if="productCart !== 0"
          class="product"
          v-for="(item, i) in productCart"
          :key="i"
        >
          <div class="">
            <img :src="item.img" alt="image" />
            <div class="product-details">
              <h5>{{ item.name }}</h5>
              <p>${{ item.price }} x 3 <b>$375.00</b></p>
            </div>
          </div>
          <button>
            <svg
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a"
                />
              </defs>
              <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
            </svg>
          </button>
        </div>
        <div class="products-checkout-container">
          <button v-if="productCart !== 0" class="products-checkout">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product div:nth-child(1) {
  gap: 0.5rem;
}
.product div:nth-child(2) {
  gap: 0.5rem;
  justify-content: center;
}

.product div {
  display: flex;
}
.products-checkout-container {
  padding: 0 1.5rem 1.5rem 1.5rem;
  width: 100%;
}
.product button {
  background-color: transparent;
  outline: none;
  border: none;
}
.products-checkout {
  background-color: var(--orange);
  padding: 1rem;
  color: var(--white);
  outline: none;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  font-weight: 700;
}
.product {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
}
.product img {
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.3rem;
}
.product-details {
  display: flex;
  flex-direction: column;
}
.product-details h5 {
  font-weight: 400;
  font-size: 0.9rem;
  color: var(--grayish-blue);
}
.product-details p {
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--grayish-blue);
}
.product-details b {
  color: var(--very-dark-blue);
  font-size: 0.8rem;
  font-weight: 700;
}
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
  border-radius: 0.5rem;
  box-shadow: -1px 5px 16px -2px rgba(0, 0, 0, 0.2);
}
.cart-products h4 {
  font-size: 1rem;
  color: var(--very-dark-blue);
  padding: 1.5rem;
  border-bottom: 1px solid var(--light-grayish-blue);
}
.items-product {
  display: grid;
  place-items: center;
}
.items-product_empty {
  font-weight: 700;
  font-size: 1rem;
  color: var(--dark-grayish-blue);
}
@media (min-width: 500px) {
  .modal-product-add {
    margin-top: 5rem;
    padding: 0 1rem;
    display: flex;
    justify-content: end;
  }
  .cart-products {
    width: 21rem;
  }
}
@media (min-width: 1200px) {
  .modal-product-add {
    position: absolute;
    margin-top: 3rem;
    padding: 0;
    width: auto;
    left: auto;
    right: -7rem;
  }
}
</style>
