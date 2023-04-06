<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* ----- Nav and dropdown click event ----- */
const isMenuOpen = ref(false)
const screenWidth = ref(window.innerWidth)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

//Resize handling
function handleResize() {
  screenWidth.value = window.innerWidth
}

// Add resize event listener when component is mounted
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// Remove resize event listener when component is mounted
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header>
    <nav :class="{ 'nav-active': isMenuOpen && screenWidth <= 768 }">
      <div @click="toggleMenu" class="menu-icon">
        <span class="menu-icon__line menu-icon__line-left"></span>
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line menu-icon__line-right"></span>
      </div>
      <ul class="menu" :class="{ 'is-open': isMenuOpen && screenWidth <= 768 }">
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
  overflow-y: scroll;
  max-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 3rem;
  z-index: 10;
}

nav::-webkit-scrollbar {
  width: 0; /* Set the width of the scroll bar */
}

nav::-webkit-scrollbar-track {
  background-color: transparent; /* Set the background color of the scroll bar track */
}

nav::-webkit-scrollbar-thumb {
  background-color: transparent; /* Set the color of the scroll bar thumb */
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

.menu.is-open {
  display: block;
}

.menu li a {
  font-size: 1rem;
  font-weight: 600;
  color: var(--textWhite);
  cursor: pointer;
}

.menu li a:hover {
  font-weight: 600;
  color: var(--primaryColor);
}

.menu li a span {
  display: none;
}

@media screen and (max-width: 768px) {
  nav {
    width: auto;
    margin: 0 0.75rem;
    display: block;
    top: 2rem;
    left: 0;
    right: 0;
  }

  /* ----- Menu List ----- */

  .menu {
    width: 100%;
    display: none;
    padding: 2.5rem 1.25rem;
    backdrop-filter: blur(12.5px);
    background-color: transparent;
  }

  .menu li {
    margin-bottom: 1.5rem;
  }

  .menu li:last-child {
    margin-bottom: 0;
  }

  .menu li a {
    padding-left: 2.125rem;
    color: var(--textWhite);
    font-size: 2.5rem;
    font-weight: 500;
    border-bottom: 3px solid transparent;
  }

  .menu li a:hover {
    color: var(--textWhite);
  }

  .menu li a:hover span {
    color: var(--primaryColor);
  }

  .menu li a span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin-right: 0.75rem;
    font-size: 1.25rem;
    font-weight: 500;
  }

  /* ----- Menu Icon ----- */
  .menu-icon {
    margin-left: auto;
    margin-right: 1.25rem;
    height: 30px;
    width: 30px;
    position: relative;
    z-index: 2;
    cursor: pointer;
    display: block;
  }
  .menu-icon__line {
    height: 2px;
    width: 30px;
    display: block;
    background-color: #fff;
    margin-bottom: 7px;
    cursor: pointer;
    -webkit-transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
    transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
    transition: transform 0.2s ease, background-color 0.5s ease;
    transition: transform 0.2s ease, background-color 0.5s ease, -webkit-transform 0.2s ease;
  }
  .menu-icon__line-left {
    width: 16.5px;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .menu-icon__line-right {
    width: 16.5px;
    float: right;
    -webkit-transition: all 200ms linear;
    -moz-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    -ms-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .menu-icon:hover .menu-icon__line-left,
  .menu-icon:hover .menu-icon__line-right {
    width: 30px;
  }

  /* Menu drowdown onclick */
  .nav-active .menu-icon__line {
    background-color: #fff;
    -webkit-transform: translate(0px, 0px) rotate(-45deg);
    transform: translate(0px, 0px) rotate(-45deg);
  }
  .nav-active .menu-icon__line-left {
    width: 15px;
    -webkit-transform: translate(2px, 4px) rotate(45deg);
    transform: translate(2px, 4px) rotate(45deg);
  }
  .nav-active .menu-icon__line-right {
    width: 15px;
    float: right;
    -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
    transform: translate(-3px, -3.5px) rotate(45deg);
  }
  .nav-active .menu-icon:hover .menu-icon__line-left,
  .nav-active .menu-icon:hover .menu-icon__line-right {
    width: 15px;
  }
}
</style>
