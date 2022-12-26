<script setup></script>
<template>
  <div role="header" class="header">
    <div class="header-nav" role="navigation">
      <div class="nav-separator">
        <div class="nav-ham">
          <button aria-label="open menu">
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
        <div class="nav-icons-button">
          <img src="../assets/icon-cart.svg" alt="cart" />
          <span class="icons-button-count"> 2 </span>
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
  font-size: 1rem;
  color: var(--dark-grayish-blue);
}
.nav-separator {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.nav-icons-button {
  justify-content: center;
  align-items: center;
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
  top: 0.2rem;
  right: -0.5rem;
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
@media (min-width: 810px) {
  .nav-content {
    display: flex;
  }
  .nav-separator {
    gap: 3rem;
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
.nav-avatar-hover {
  width: 2.375rem;
  height: 2.375rem;
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
</style>
