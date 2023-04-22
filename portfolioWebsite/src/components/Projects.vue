<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import Card from '../components/projects/Card.vue'
/* import allProjects from '../data/projects.json' */
/* JSON file in javascript to be able to display images after building the website */
import allProjects from '../data/projects.js'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

//Projects scrollTrigger animation
const container = ref(null)
const title = ref(null)
const text = ref(null)
const button = ref(null)
const cardContainer = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const titleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: window.innerWidth > 1068 ? '-5% center' : 'top center',
      end: window.innerWidth > 1068 ? '20% center' : '10% center',
      scrub: 1
    }
  })

  titleTimeline.from(title.value, {
    x: '-100%'
  })

  const textTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: '5% center',
      end: '15% center',
      scrub: 1
    }
  })

  textTimeline.from(text.value, {
    x: window.innerWidth > 1068 ? '-150%' : '-125%'
  })

  const cardTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: '10% bottom',
      end: window.innerWidth > 1179 ? '60% bottom' : '25% center',
      scrub: 1
    }
  })

  cardTimeline.from(cardContainer.value, {
    y: '50%',
    opacity: 0
  })

  onUnmounted(() => {
    titleTimeline.kill()
    textTimeline.kill()
    cardTimeline.kill()
  })
})

const projects = ref(allProjects)
</script>

<template>
  <section id="projects" class="projects" ref="container">
    <div class="container">
      <!-- Title -->
      <div class="title" ref="title">
        <h1 class="section-number">02</h1>
        <h1 class="section-name">Projects.</h1>
      </div>
      <div class="inner-container">
        <!-- Text and Filter goes here -->
        <div class="text-container">
          <p ref="text">
            In every project I always try to learn from my previous solutions, ideas in a way to be
            able to make a better work either design or functionality wise. Here you can see my
            biggest and most recent projects.
          </p>
        </div>
        <div class="card-container" ref="cardContainer">
          <!-- Cards Go Here -->
          <Card v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background-color: var(--bgNormalBlack);
}
.container {
  padding: 6.25rem 5rem;
  background-color: var(--bgBlack);
  border-radius: 40px 40px 0 0;
}

.projects .container .title {
  margin-top: 0;
  margin-left: 0rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3rem;
}

.projects .container .title h1 {
  font-size: 10rem;
  font-weight: 600;
}

.projects .container .title .section-number {
  border-bottom: 7px solid var(--primaryColor);
  border-radius: 5px;
  line-height: 1;
  letter-spacing: -5px;
  transform: rotate(-90deg);
}

.projects .container .inner-container {
  margin: 3.75rem 9rem 0 9rem;
}

/* ----- Text and Filter Button -----*/
.projects .container .inner-container .text-container {
  display: flex;
  align-items: center;
  gap: 3.75rem;
}

.projects .container .inner-container .text-container p {
  width: 680px;
  font-size: 1.25rem;
  color: var(--textNormalGray);
  font-weight: 500;
}

/* ----- Card Container -----*/
.projects .container .inner-container .card-container {
  margin-top: 6.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.25rem;
}

/* ----- Responsive ----- */
@media screen and (max-width: 1400px) {
  .projects .container .inner-container {
    margin: 3.75rem 2rem 0 2rem;
  }
}

@media screen and (max-width: 1068px) {
  .container {
    padding: 4rem;
    padding-bottom: 6.25rem;
  }
  .projects .container .inner-container {
    margin: 2.5rem 0;
  }

  .projects .container .title {
    margin-left: -1.25rem;
    gap: 1rem;
  }

  .projects .container .title h1 {
    font-size: 7rem;
  }

  .projects .container .title .section-number {
    border-bottom: 4px solid var(--primaryColor);
    border-radius: 3px;
  }

  .projects .container .inner-container .text-container {
    flex-direction: column;
    align-items: start;
    gap: 3.75rem;
  }

  .projects .container .inner-container .text-container p {
    width: 90%;
  }

  .projects .container .inner-container .card-container {
    margin-top: 2.5rem;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 2rem;
    padding-bottom: 6.25rem;
    border-radius: 30px 30px 0 0;
  }

  .projects .container .inner-container .text-container p {
    width: 100%;
  }
}

/* ----- Title Resize ----- */
@media screen and (max-width: 660px) {
  .projects .container .title {
    margin-left: -0.75rem;
  }

  .projects .container .title h1 {
    font-size: 4rem;
  }

  .projects .container .title .section-number {
    letter-spacing: 0px;
  }
}

@media screen and (max-width: 560px) {
  .container {
    padding: 1.5rem;
    padding-bottom: 3.75rem;
  }
  .projects .container .inner-container .text-container p {
    font-size: 1.125rem;
  }

  .projects .container .inner-container .card-container {
    gap: 2.5rem;
  }
}

/* ----- Title Resize ----- */
@media screen and (max-width: 400px) {
  .container {
    border-radius: 20px 20px 0 0;
  }
  .projects .container .inner-container {
    margin: 2rem 0;
  }

  .projects .container .title {
    margin-left: -0.5rem;
    gap: 0.75rem;
  }

  .projects .container .title h1 {
    font-size: 2.5rem;
  }

  .projects .container .title .section-number {
    border-bottom: 3px solid var(--primaryColor);
  }
}

@media screen and (max-width: 360px) {
  .projects .container .inner-container .card-container {
    gap: 2rem;
  }
}
</style>
