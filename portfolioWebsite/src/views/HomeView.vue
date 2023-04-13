<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Home from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import FooterSection from '../components/FooterSection.vue'

// ---------- Nav links ----------
const sections = ref([
  { id: 'home', number: '00', title: 'Home.', active: true },
  { id: 'about', number: '01', title: 'About.', active: false },
  { id: 'projects', number: '02', title: 'Projects.', active: false },
  { id: 'skills', number: '03', title: 'Skills.', active: false },
  { id: 'contact', number: '04', title: 'Contact.', active: false }
])

//Handle navbar navigation on clicking
const handleSelectSection = (id) => {
  const section = document.getElementById(id)
  section.scrollIntoView({ behavior: 'smooth' })
}

//Active status boolean value toggle
function sectionStatus(trueId) {
  for (let i = 0; i < sections.value.length; i++) {
    if (i === trueId) {
      sections.value[i].active = true
    } else {
      sections.value[i].active = false
    }
  }
}

//Active status boolean value toggle based on scroll position
const setSectionStatus = () => {
  const scrollPosition = window.scrollY

  const section0Height = document.querySelector('#home').offsetHeight
  const section1Height = document.querySelector(`#${sections.value[1].id}`).offsetHeight
  const section2Height = document.querySelector(`#${sections.value[2].id}`).offsetHeight
  const section3Height = document.querySelector(`#${sections.value[3].id}`).offsetHeight
  const section4Height = document.querySelector(`#${sections.value[4].id}`).offsetHeight

  if (
    Math.ceil(window.innerHeight + window.pageYOffset) ==
      (section0Height + section1Height + section2Height + section3Height + section4Height ||
        section0Height + section1Height + section2Height + section3Height + section4Height + 1 ||
        section0Height + section1Height + section2Height + section3Height + section4Height - 1) ||
    Math.floor(window.innerHeight + window.pageYOffset) ==
      (section0Height + section1Height + section2Height + section3Height + section4Height ||
        section0Height + section1Height + section2Height + section3Height + section4Height + 1 ||
        section0Height + section1Height + section2Height + section3Height + section4Height - 1)
  ) {
    sectionStatus(4)
  } else if (scrollPosition < section0Height - 150) {
    sectionStatus(0)
  } else if (scrollPosition < section0Height + section1Height - 150) {
    sectionStatus(1)
  } else if (scrollPosition < section0Height + section1Height + section2Height - 150) {
    sectionStatus(2)
  } else if (
    scrollPosition <
    section0Height + section1Height + section2Height + section3Height - 150
  ) {
    sectionStatus(3)
  }
}

const handleScroll = () => {
  setSectionStatus()
}

//Scroll handle added when the app mounts
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
//Scroll handle removed when the app unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Navbar :sections="sections" @select-section="handleSelectSection" />
  <Home id="home" :homeImg="'src/images/best.jpg'" />
  <About id="about" />
  <Projects id="projects" />
  <Skills
    id="skills"
    :skillsImg="'src/images/bubbleBG.png'"
    :skillsImgMobile="'src/images/bubbleBGMobile.png'"
  />
  <FooterSection id="contact" />
</template>

<style scoped></style>