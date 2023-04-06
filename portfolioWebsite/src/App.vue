<script setup>
import Home from './components/Home.vue'
import Nav from './components/Nav.vue'
</script>

<template>
  <Home />
  <Nav />
  <section class="about">
    <div class="title">
      <h1 class="section-number">01</h1>
      <h1 class="section-name">About.</h1>
    </div>
    <div class="content">
      <p>
        In Chronicle everything is made with Blocks that come with pixel perfect design,
        interactivity and motion out of the box. Instead of designing from scratch, simply choose
        the right one from our library of blocks and see the magic unfold.
      </p>
      <div class="btn-container">
        <a href="" download="">
          <span>Download CV</span>
          <font-awesome-icon class="icon" :icon="['fas', 'download']" />
        </a>
        <a href="">
          <span>Watch CV</span>
          <font-awesome-icon class="icon" :icon="['fas', 'play']" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  width: 100%;
  background-color: var(--bgNormalBlack);
  padding: 6.25rem;
  display: flex;
  align-items: center;
}

.about .title {
  margin-top: 11.5rem;
  margin-left: -2.25rem;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 12.75rem;
}

.about .title h1 {
  font-size: 10rem;
  font-weight: 600;
}

.about .title .section-number {
  border-top: 7px solid var(--primaryColor);
  border-radius: 5px;
  line-height: 1;
}

.about .title .section-name {
  transform: rotate(-90deg);
  line-height: 1;
}

.about .content {
  width: 800px;
  margin: 0 auto;
}

.about .content p {
  font-size: 3.75rem;
  font-weight: 600;
  line-height: 67px;
  color: var(--textDarkGray);
}

.about .content .btn-container {
  margin-top: 3.75rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.about .content .btn-container a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--textLightGray);
  color: var(--textLightGray);
  border-radius: 60em;
  font-size: 1rem;
}

.about .content .btn-container a:hover {
  border: 1px solid var(--primaryColor);
}

.about .content .btn-container a span {
  margin-top: 1px;
  font-size: 1rem;
  font-weight: 600;
}
</style>
