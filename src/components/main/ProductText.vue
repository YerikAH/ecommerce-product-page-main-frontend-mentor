<script setup></script>
<template>
  <div class="content_product">
    <span>SNEAKER COMPANY</span>
    <h3>Fall Limited Edition Sneakers</h3>
    <p>
      These low-profile sneakers are your perfect casual wear companion.
      Fearturing a durable rubber outer sole, they'll withstand everything the
      weather can ofter.
    </p>
  </div>
</template>
<style scoped>
.content_product {
  display: grid;
  padding: 1rem;
}
.content_product span {
  color: var(--orange);
  font-weight: 700;
  letter-spacing: 0.15em;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}
.content_product h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--very-dark-blue);
}
.content_product p {
  font-size: 1rem;
  line-height: 1.7rem;
  color: var(--dark-grayish-blue);
}
@media (min-width: 1024px) {
  .content_product span {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  .content_product h3 {
    font-size: 2.7rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.8px;
  }
  .content_product {
    padding: 1rem 0;
  }
}
</style>
