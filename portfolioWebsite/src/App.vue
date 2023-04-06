<script setup>
import Home from './components/Home.vue'
</script>

<template>
  <Home />
  <header>
    <nav>
      <div class="menu-icon">
        <span class="menu-icon__line menu-icon__line-left"></span>
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line menu-icon__line-right"></span>
      </div>
      <ul class="menu">
        <li>
          <a href=""><span>00</span>Home.</a>
        </li>
        <li>
          <a href=""><span>01</span>About.</a>
        </li>
        <li>
          <a href=""><span>02</span>Projects.</a>
        </li>
        <li>
          <a href=""><span>03</span>Skills.</a>
        </li>
        <li>
          <a href=""><span>04</span>Contact.</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 3rem;
  z-index: 10;
}
.menu-icon {
  display: none;
}

.menu {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--bgNavBlack);
  border-radius: 12.5px;
}

.menu li a {
  font-size: 1rem;
  font-weight: 600;
  color: var(--textWhite);
  cursor: pointer;
}

.menu li a:hover {
  color: var(--primaryColor);
}

.menu li a span {
  display: none;
}
</style>
