<script setup>
import { ref } from "vue";
import MenuMobile from "./MenuMobile.vue";
import ModalProductAdd from "./ModalProductAdd.vue";
const menuMobileSwitch = ref(false);
const modalProduct = ref(false);
const valueProps = defineProps(["productCart"]);
const emit = defineEmits(["eventHeader"]);
function switchMenuMobile() {
  menuMobileSwitch.value = !menuMobileSwitch.value;
}
function switchProduct(e) {
  let eventClick;
  if (e.target.tagName === "path") {
    eventClick = e.target.parentElement;
  } else {
    eventClick = e.target;
  }
  if (eventClick.className.baseVal === "openModalSwitch") {
    modalProduct.value = !modalProduct.value;
  }
}
function deleteEmit(id) {
  emit("eventHeader", id);
}
</script>
<template>
  <div role="header" class="header">
    <Teleport to="body">
      <MenuMobile v-show="menuMobileSwitch" @event-switch="switchMenuMobile" />
    </Teleport>
    <div class="header-nav" role="navigation">
      <div class="nav-separator">
        <div class="nav-ham">
          <button aria-label="open menu" @click="switchMenuMobile">
            <img src="../assets/icon-menu.svg" alt="menu" />
          </button>
        </div>
        <div class="nav-logo">
          <ul>
            <li>
              <a href="#"><img src="../assets/logo.svg" alt="logo" /></a>
            </li>
          </ul>
        </div>
        <div class="nav-content">
          <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Man</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="nav-icons">
        <div class="nav-icons-button" @click="switchProduct">
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            class="openModalSwitch"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
          </svg>
          <span class="icons-button-count"> 2 </span>
          <ModalProductAdd
            v-show="modalProduct"
            :valueProps="valueProps.productCart"
            @evemodal-header="(id) => deleteEmit(id)"
          />
        </div>
        <div class="nav-avatar-hover">
          <img src="../assets/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin: 0 auto;
}

.header-nav {
  display: flex;
  max-width: 69.25rem;
  width: 100%;
  justify-content: space-between;
}
.nav-logo {
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-logo img {
  width: 100%;
}
.nav-content ul {
  display: flex;
  gap: 1rem;
  padding: 2.5rem 0 2.1rem 0;
}
.nav-content a {
  position: relative;
  display: block;
  font-size: 1rem;
  color: var(--dark-grayish-blue);
  transition: 0.3s;
}
.nav-content a::after {
  content: "";
  position: absolute;
  width: 100%;
  background-color: var(--orange);
  height: 0px;
  left: 0;
  bottom: -2.75rem;
  transition: 0.3s;
}
.nav-content a:hover {
  color: var(--very-dark-blue);
}
.nav-content a:hover::after {
  height: 5px;
}
.nav-separator {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.nav-icons-button {
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;
}
.icons-button-count {
  background-color: var(--orange);
  position: absolute;
  padding: 0.1rem 0.4rem;
  border-radius: 15rem;
  font-size: 0.6rem;
  color: var(--white);
  top: -0.4rem;
  right: -0.6rem;
}
.nav-icons-button path {
  transition: 0.3s;
}
.nav-icons-button:hover path {
  fill: black;
}
.nav-content {
  display: none;
  align-items: center;
}
.nav-ham {
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-ham button {
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-avatar-hover {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 15rem;
}
.nav-icons {
  padding: 1rem 0;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-avatar-hover img {
  object-fit: cover;
  width: 100%;
}
.nav-avatar-hover:hover {
  background-color: var(--orange);
  border-radius: 95rem;
}
@media (min-width: 1024px) {
  .nav-content {
    display: flex;
  }
  .nav-separator {
    gap: 4rem;
  }
  .nav-logo {
    padding: 2.5rem 0 2.1rem 0;
  }
  .nav-icons {
    gap: 3rem;
    padding: 2.5rem 0 2.1rem 0;
  }
  .nav-ham {
    display: none;
  }
  .header-nav {
    border-bottom: 1px solid var(--grayish-blue);
  }
}
</style>
