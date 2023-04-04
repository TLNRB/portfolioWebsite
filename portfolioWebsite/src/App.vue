<script setup></script>

<template>
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
  <div class="api-data">
    <p>9°C</p>
    <p>DE</p>
    <p>18:42 PM</p>
  </div>
  <div class="icons">
    <font-awesome-icon :icon="['fab', 'linkedin']" />
    <font-awesome-icon :icon="['fab', 'square-github']" />
  </div>
</template>

<style scoped>
nav {
  margin: 2rem 0.75rem 0 0.75rem;
  padding: 0 1.25rem;
  display: block;
}

/* ----- API Data ----- */
.api-data {
  position: absolute;
  top: 0rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.api-data p {
  font-size: 0.875rem;
  font-weight: 500;
}

/* ----- Icons ----- */
.icons {
  position: absolute;
  bottom: -10rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.875rem;
  cursor: pointer;
}

/* ----- Menu List ----- */
.menu {
  margin: 2.5rem 0;
  backdrop-filter: blur(10px);
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

.menu li a span {
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
body.nav-active .menu-icon__line {
  background-color: #fff;
  -webkit-transform: translate(0px, 0px) rotate(-45deg);
  transform: translate(0px, 0px) rotate(-45deg);
}
body.nav-active .menu-icon__line-left {
  width: 15px;
  -webkit-transform: translate(2px, 4px) rotate(45deg);
  transform: translate(2px, 4px) rotate(45deg);
}
body.nav-active .menu-icon__line-right {
  width: 15px;
  float: right;
  -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
  transform: translate(-3px, -3.5px) rotate(45deg);
}
body.nav-active .menu-icon:hover .menu-icon__line-left,
body.nav-active .menu-icon:hover .menu-icon__line-right {
  width: 15px;
}
</style>
