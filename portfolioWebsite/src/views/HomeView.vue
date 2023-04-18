<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import profilePic from '../assets/images/best.jpg'
import bubbleWeb from '../assets/images/bubbleBG.png'
import bubbleMobile from '../assets/images/bubbleBGMobile.png'

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
        section0Height + section1Height + section2Height + section3Height + section4Height - 1) ||
    window.innerHeight + window.pageYOffset ==
      section0Height + section1Height + section2Height + section3Height + section4Height
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

//Nav move up after scroll position
const isScrolling = ref(false)

const handleScroll = () => {
  setSectionStatus()
  if (window.pageYOffset > 0 && window.innerWidth > 768) {
    isScrolling.value = true
  } else {
    isScrolling.value = false
  }
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
  <div class="appContainer">
    <Navbar
      :sections="sections"
      @select-section="handleSelectSection"
      :class="{ 'scroll-up': isScrolling }"
    />
    <Home id="home" :homeImg="profilePic" />
    <About id="about" />
    <Projects id="projects" />
    <Skills id="skills" :skillsImg="bubbleWeb" :skillsImgMobile="bubbleMobile" />
    <FooterSection id="contact" />
  </div>
</template>

<style scoped>
.appContainer {
  overflow: hidden;
}
.scroll-up {
  transform: translateY(-2.5rem);
  transition: transform 0.25s ease-in-out;
}
</style>
