<script setup>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <Navbar />
  <Home />
  <About />
  <section class="projects">
    <div class="title">
      <h1 class="section-number">02</h1>
      <h1 class="section-name">Projects.</h1>
    </div>
    <div class="container">
      <div class="text-container">
        <p>
          In Chronicle everything is made with Blocks that come with pixel perfect design,
          interactivity and motion out of the box. Instead of designing from scratch, simply choose
          the right one from our library of blocks and see the magic unfold.
        </p>
        <div class="filter-btn-container">
          <button>All</button>
          <button>Website</button>
          <button>Video</button>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img src="" alt="" />
          <div class="lower-container">
            <div class="info">
              <h3>Pasta Perfect</h3>
              <h3>Website</h3>
            </div>
            <div class="links"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Skills />
  <FooterSection />
</template>

<style scoped></style>
