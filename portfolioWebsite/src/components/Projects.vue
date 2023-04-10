<script setup>
import p from '../data/projects.json'
import { ref } from 'vue'

import Card from '../components/projects/Card.vue'
const projects = ref(p)
</script>

<template>
  <section class="projects">
    <div class="container">
      <!-- Title -->
      <div class="title">
        <h1 class="section-number">02</h1>
        <h1 class="section-name">Projects.</h1>
      </div>
      <div class="inner-container">
        <!-- Text and Filter goes here -->
        <div class="text-container">
          <p>
            In Chronicle everything is made with Blocks that come with pixel perfect design,
            interactivity and motion out of the box. Instead of designing from scratch, simply
            choose the right one from our library of blocks and see the magic unfold.
          </p>
          <div class="filter-btn-container">
            <button class="btn-active">All</button>
            <button>Website</button>
            <button>Video</button>
          </div>
        </div>
        <div class="card-container">
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

.projects .container .inner-container .text-container .filter-btn-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.projects .container .inner-container .text-container .filter-btn-container button {
  font-family: 'Red Hat Display', sans-serif;
  padding: 0.813rem 1.5rem 0.75rem 1.5rem;
  background-color: transparent;
  border: 1px solid var(--textLightGray);
  color: var(--textLightGray);
  border-radius: 60em;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}

.projects .container .inner-container .text-container .filter-btn-container .btn-active {
  background-color: var(--primaryColor);
  border: 1px solid var(--primaryColor);
}

.projects .container .inner-container .text-container .filter-btn-container button:hover {
  border: 1px solid var(--primaryColor);
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
  .projects .container .inner-container .text-container .filter-btn-container button {
    font-family: 'Red Hat Display', sans-serif;
    padding: 0.688rem 1.25rem 0.625rem 1.25rem;
    font-size: 0.875rem;
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

  .projects .container .inner-container .text-container .filter-btn-container {
    gap: 1rem;
    flex-wrap: wrap;
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
