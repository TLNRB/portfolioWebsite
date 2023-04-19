<script setup>
import allSkills from '../data/skills.js'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

//Skill scrollTrigger animation
const container = ref(null)
const content = ref(null)
const title = ref(null)

//Skill hover text appear
const showIndex = ref(-1)

const showText = (index) => {
  showIndex.value = index
}
const hideText = () => {
  showIndex.value = -1
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const titleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: 'top center',
      end: window.innerWidth > 1068 ? 'center center' : '30% center',
      scrub: 1
    }
  })

  titleTimeline.from(title.value, {
    x: window.innerWidth > 1068 ? '-150%' : '-100%'
  })

  const contentTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: window.innerWidth > 1068 ? 'top center' : '15% center',
      end: window.innerWidth > 1068 ? 'center center' : '40% center',
      scrub: 1
    }
  })

  contentTimeline.from(content.value, {
    x: window.innerWidth > 1068 ? 0 : '-125%',
    y: window.innerWidth > 1068 ? '-250%' : 0
  })

  onUnmounted(() => {
    titleTimeline.kill()
    contentTimeline.kill()
  })
})

const { skillsImg, skillsImgMobile, skill } = defineProps(['skillsImg', 'skillsImgMobile', 'skill'])
const isMobile = ref(false)
const isMobileSkill = ref(false)

// Add a listener to detect when the viewport width changes
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 1068
  isMobileSkill.value = window.innerWidth < 768
})

//Skills icons
const skills = ref(allSkills)
</script>

<template>
  <section
    id="skills"
    class="skills"
    :style="{ backgroundImage: 'url(' + (isMobile ? skillsImgMobile : skillsImg) + ')' }"
    ref="container"
  >
    <div class="container">
      <div class="title" ref="title">
        <h1 class="section-number">03</h1>
        <h1 class="section-name">Skills.</h1>
      </div>
      <div class="content" ref="content">
        <div class="text">
          My technical skills in HTML, CSS, and JavaScript are just the foundation of what I bring
          to the table. I have experience with a variety of front-end frameworks and tools, and I am
          always eager to expand my knowledge and learn from others.
        </div>
        <div class="skill-container">
          <div class="slider-container">
            <div class="slider">
              <div
                v-for="skill in skills"
                :key="skill.id"
                class="skill"
                :style="{
                  marginTop: isMobileSkill ? `${1.5 * skill.marginTop}px` : `${skill.marginTop}px`
                }"
                @mouseover="showText(skill.id)"
                @mouseleave="hideText()"
              >
                <img
                  :src="skill.img"
                  :alt="skill.desc"
                  :class="{ 'skill-hovered': showIndex == skill.id }"
                />
                <transition name="fade">
                  <div v-show="showIndex == skill.id" class="tooltip">
                    {{ skill.title }}
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="headline">
            <h2>My Stack</h2>
            <h2>For Development</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background-color: var(--bgBlack);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 6.25rem;
}

.skills .container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 9rem 5rem;
  background-color: rgba(200, 200, 200, 0.1);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  overflow: hidden;
}

.skills .title {
  margin-top: 8rem;
  margin-left: -0.75rem;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 10.75rem;
}

.skills .title h1 {
  font-size: 10rem;
  font-weight: 600;
}

.skills .title .section-number {
  border-top: 7px solid var(--primaryColor);
  border-radius: 5px;
  line-height: 1;
  letter-spacing: -5px;
}

.skills .title .section-name {
  transform: rotate(-90deg);
  line-height: 1;
}

.skills .container .content {
  width: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem;
}

.skills .container .content .text {
  font-size: 1.25rem;
  font-weight: 500;
}

.skills .container .content .skill-container {
  overflow: hidden;
  width: 550px;
  height: 350px;
  margin: 0 auto;
  border: 2px solid var(--primaryColor);
  border-radius: 15px;
}

@keyframes slide {
  0% {
    left: 0;
  }

  100% {
    left: -175%;
  }
}

.skills .container .content .skill-container .slider-container {
  width: 275%;
  height: 80%;
  animation: slide 20s linear infinite alternate;
}

.skills .container .content .skill-container .slider-container .slider {
  margin: 1.25rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.skills .container .content .skill-container .slider-container .slider .skill {
  width: 125px;
  height: 125px;
  border-radius: 60em;
  border: 2px solid transparent;
  background-color: var(--bgLightBlack);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border 0.25s ease-in-out;

  box-shadow: 0px 0px 10px 0px var(--bgBoxShadowBlack);
  -webkit-box-shadow: 0px 0px 10px 0px var(--bgBoxShadowBlack);
  -moz-box-shadow: 0px 0px 10px 0px var(--bgBoxShadowBlack);
}

.skills .container .content .skill-container .slider-container .slider .skill .skill-hovered {
  filter: blur(3px);
  transition: filter 0.3s ease-in-out;
}

.skills .container .content .skill-container .slider-container .slider .skill:hover {
  border: 2px solid var(--primaryColorToned);
}

.skills .container .content .skill-container .slider-container .slider .skill img {
  width: 65px;
  height: 65px;
  opacity: 0.8;
}

.skills .container .content .skill-container .slider-container .slider .skill .tooltip {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: var(--primaryColor);
  color: var(--textWhite);
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.skills .container .content .skill-container .headline {
  position: absolute;
  left: 2rem;
  bottom: 1.25rem;
}

.skills .container .content .skill-container .headline h2 {
  font-size: 1.125rem;
  color: var(--textWhite);
  font-weight: 600;
}
.skills .container .content .skill-container .headline h2:last-child {
  color: var(--textNormalGray);
  font-weight: normal;
}

@media screen and (max-width: 1400px) {
  .skills .container {
    padding: 7rem 3rem;
  }

  .skills .container .content {
    width: 400px;
  }

  .skills .container .content .skill-container {
    width: 400px;
    height: 300px;
  }

  @keyframes slide {
    0% {
      left: 0;
    }

    100% {
      left: -130%;
    }
  }

  .skills .container .content .skill-container .slider-container {
    width: 230%;
    height: 70%;
  }

  .skills .container .content .skill-container .slider-container .slider {
    gap: 1rem;
  }

  .skills .container .content .skill-container .slider-container .slider .skill {
    width: 75px;
    height: 75px;
    border: 1px solid transparent;
  }

  .skills .container .content .skill-container .slider-container .slider .skill:hover {
    border: 1px solid var(--primaryColorToned);
  }

  .skills .container .content .skill-container .slider-container .slider .skill img {
    width: 40px;
    height: 40px;
  }

  .skills .container .content .skill-container .slider-container .slider .skill .tooltip {
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
  }
}

@media screen and (max-width: 1068px) {
  .skills {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 6.25rem 3.25rem;
  }

  .skills .container {
    flex-direction: column;
    padding: 0 2.5rem 2.5rem 2.5rem;
    border-radius: 30px;
    overflow: visible;
  }

  .skills .title {
    transform: translateY(-3rem);
    margin-top: 0;
    margin-left: -3rem;
    width: 100%;
    justify-content: start;
    flex-direction: row;
    gap: 1rem;
  }

  .skills .title h1 {
    font-size: 7rem;
  }

  .skills .title .section-number {
    border-top: 0;
    border-bottom: 4px solid var(--primaryColor);
    border-radius: 3px;
    transform: rotate(-90deg);
  }

  .skills .title .section-name {
    transform: rotate(0);
  }

  .skills .container .content {
    width: 100%;
    margin-top: 3rem;
    gap: 3.75rem;
  }

  .skills .container .content .text {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .skills .container .content .skill-container {
    width: 500px;
    height: 350px;
    margin: 0 auto;
    border: 2px solid var(--primaryColor);
    border-radius: 15px;
  }

  @keyframes slide {
    0% {
      left: 0;
    }

    100% {
      left: -150%;
    }
  }

  .skills .container .content .skill-container .slider-container {
    width: 250%;
    height: 80%;
  }

  .skills .container .content .skill-container .slider-container .slider {
    margin: 2rem 0;
    gap: 1.5rem;
  }

  .skills .container .content .skill-container .slider-container .slider .skill {
    width: 100px;
    height: 100px;
  }

  .skills .container .content .skill-container .slider-container .slider .skill img {
    width: 55px;
    height: 55px;
  }

  .skills .container .content .skill-container .slider-container .slider .skill .tooltip {
    border-radius: 30px;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
  }
}

@media screen and (max-width: 768px) {
  .skills {
    padding: 6.25rem 2rem 3.75rem 2rem;
  }
  .skills .container {
    padding: 0 2rem 2rem 2rem;
  }

  .skills .container .content .skill-container {
    width: 350px;
    height: 450px;
  }

  @keyframes slide {
    0% {
      left: 0;
    }

    100% {
      left: -235%;
    }
  }

  .skills .container .content .skill-container .slider-container {
    width: 335%;
    height: 80%;
  }

  .skills .container .content .skill-container .slider-container .slider {
    margin: 3rem 0;
    gap: 1rem;
  }

  .skills .container .content .skill-container .slider-container .slider .skill {
    width: 100px;
    height: 100px;
  }

  .skills .container .content .skill-container .slider-container .slider .skill img {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 560px) {
  .skills {
    padding: 3.75rem 1.5rem;
  }
  .skills .container {
    padding: 0 1.25rem 1.25rem 1.25rem;
    border-radius: 20px;
  }
  .skills .title {
    transform: translateY(-1.75rem);
    margin-left: -1.5rem;
  }

  .skills .title .section-number {
    letter-spacing: 0px;
  }
  .skills .title h1 {
    font-size: 4rem;
  }

  .skills .container .content {
    margin-top: 2rem;
  }

  .skills .container .content .skill-container {
    width: 250px;
    height: 350px;
    border-radius: 10px;
  }

  @keyframes slide {
    0% {
      left: 0;
    }

    100% {
      left: -250%;
    }
  }

  .skills .container .content .skill-container .slider-container {
    width: 350%;
    height: 80%;
  }

  .skills .container .content .skill-container .slider-container .slider {
    margin: 1.5rem 0;
    gap: 0.5rem;
  }

  .skills .container .content .skill-container .slider-container .slider .skill {
    width: 75px;
    height: 75px;
    border: 1px solid transparent;
    transition: border 0.25s ease-in-out;
  }

  .skills .container .content .skill-container .slider-container .slider .skill:hover {
    border: 1px solid var(--primaryColorToned);
  }

  .skills .container .content .skill-container .slider-container .slider .skill img {
    width: 40px;
    height: 40px;
  }

  .skills .container .content .skill-container .slider-container .slider .skill .tooltip {
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.625rem;
  }

  .skills .container .content .text {
    font-size: 1rem;
  }

  .skills .container .content .skill-container .headline {
    position: absolute;
    left: 1.25rem;
    bottom: 1.25rem;
  }

  .skills .container .content .skill-container .headline h2:first-child {
    margin-bottom: -0.25rem;
  }

  .skills .container .content .skill-container .headline h2 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 360px) {
  .skills .title {
    transform: translateY(-1.25rem);
    margin-left: -1rem;
    gap: 0.75rem;
  }

  .skills .title h1 {
    font-size: 2.5rem;
  }

  .skills .title .section-number {
    border-bottom: 3px solid var(--primaryColor);
  }

  .skills .container .content {
    margin-top: 2rem;
  }

  .skills .container .content .skill-container {
    width: 175px;
    height: 400px;
  }

  @keyframes slide {
    0% {
      left: 0;
    }

    100% {
      left: -355%;
    }
  }

  .skills .container .content .skill-container .slider-container {
    width: 455%;
    height: 80%;
  }

  .skills .container .content .skill-container .slider-container .slider {
    margin: 3rem 0;
    gap: 0rem;
  }
}
</style>
