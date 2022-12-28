<script setup></script>
<template>
  <div class="product_price">
    <div class="product_price_first">
      <h6>$125.00</h6>
      <span>50%</span>
    </div>
    <del>$250.00</del>
  </div>
</template>
<style scoped>
.product_price {
  padding: 0 1rem 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product_price_first {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
.product_price_first h6 {
  font-size: 2rem;
  color: var(--very-dark-blue);
}
.product_price_first span {
  display: block;
  padding: 0.2rem 0.4rem;
  color: var(--orange);
  background-color: rgba(255, 125, 26, 0.15);
  border-radius: 0.3rem;
  font-weight: 700;
  font-size: 1rem;
}
.product_price del {
  font-weight: 700;
  font-size: 1rem;
  display: block;
  color: var(--grayish-blue);
}
@media (min-width: 1024px) {
  .product_price {
    flex-direction: column;
    margin-top: 1rem;
    align-items: start;
  }
  .product_price del {
    margin-top: 1rem;
  }
}
</style>
