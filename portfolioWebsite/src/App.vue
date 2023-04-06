<script setup>
import Home from './components/Home.vue'
import Nav from './components/Nav.vue'
</script>

<template>
  <Home />
  <Nav />
  <section class="about">
    <div class="title">
      <h1><span>01</span>About.</h1>
    </div>
    <div class="content">
      <p>
        In Chronicle everything is made with Blocks that come with pixel perfect design,
        interactivity and motion out of the box. Instead of designing from scratch, simply choose
        the right one from our library of blocks and see the magic unfold.
      </p>
      <div class="btn-container">
        <a class="btn" href=""
          >Download CV
          <font-awesome-icon :icon="['fas', 'download']" />
        </a>
        <a class="btn" href="">
          Watch CV
          <font-awesome-icon :icon="['fas', 'play']" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: var(--bgNormalBlack);
  padding: 6.25rem;
}
</style>
