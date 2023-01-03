<script setup></script>
<template>
  <div class="menu-app-mobile">
    <div class="mobile-menu">
      <button aria-label="close menu mobile" @click="$emit('eventSwitch')">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#333333"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <ul>
        <li><a href="#">Collections</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#"> Contact </a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.menu-app-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: start;
  align-items: start;
  background-color: rgba(0, 0, 0, 0.7);
}
.mobile-menu {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 2.5rem;
  align-items: start;
  justify-content: start;
  width: 60%;
  height: 100%;
  overflow: auto;
  background-color: var(--white);
}
.mobile-menu button {
  background-color: transparent;
  border-radius: 15rem;
  outline: none;
  border: none;
}
.mobile-menu ul {
  display: grid;
  gap: 1.5rem;
  place-items: start;
}
.mobile-menu li {
  list-style: none;
}
.mobile-menu a {
  color: var(--very-dark-blue);
  font-size: 1rem;
  font-weight: 700;
}
</style>
