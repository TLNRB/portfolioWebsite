<script setup>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <Navbar />
  <Home :homeImg="'src/images/best.jpg'" />
  <About />
  <Projects />
  <Skills
    :skillsImg="'src/images/bubbleBG.png'"
    :skillsImgMobile="'src/images/bubbleBGMobile.png'"
  />
  <FooterSection />
</template>

<style scoped></style>
