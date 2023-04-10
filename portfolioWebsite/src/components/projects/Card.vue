<script setup>
import { defineProps } from 'vue'

const { project } = defineProps(['project'])
</script>

<template>
  <div class="card">
    <img :src="project.img" alt="" />
    <div class="lower-container">
      <div class="info">
        <h3>{{ project.title }}</h3>
        <h3>{{ project.category }}</h3>
      </div>
      <div class="links">
        <a :href="project.gitHub" target="_blank"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>
        <a :href="project.liveServer" target="_blank"
          ><font-awesome-icon :icon="['fas', 'circle-play']"
        /></a>
      </div>
      <button><font-awesome-icon :icon="['fas', 'circle-info']" /></button>
    </div>
  </div>
</template>

<style scoped>
/* ----- Card -----*/
.projects .container .inner-container .card-container .card {
  width: 450px;
  height: 330px;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 10px;
  overflow: hidden;
}

.projects .container .inner-container .card-container .card img {
  width: 100%;
  height: 250px;
}

.projects .container .inner-container .card-container .card .lower-container {
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bgLightBlack);
}

.projects .container .inner-container .card-container .card .lower-container .info h3 {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
}

.projects .container .inner-container .card-container .card .lower-container .info h3:last-child {
  color: var(--textNormalGray);
}

.projects .container .inner-container .card-container .card .lower-container .links {
  margin: 0 1.5rem 0 auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.projects .container .inner-container .card-container .card .lower-container .links a {
  font-size: 1.75rem;
  color: var(--textWhite);
}

.projects .container .inner-container .card-container .card .lower-container .links a:hover {
  color: var(--primaryColor);
}

.projects .container .inner-container .card-container .card .lower-container button {
  background-color: transparent;
  border: none;
  font-size: 1.75rem;
  color: var(--textWhite);
  cursor: pointer;
}

.projects .container .inner-container .card-container .card .lower-container button:hover {
  color: var(--primaryColor);
}

/* ----- Responsive ----- */

@media screen and (max-width: 560px) {
  /* ----- Card Resize ----- */
  .projects .container .inner-container .card-container .card {
    width: 300px;
    height: 229px;
  }

  .projects .container .inner-container .card-container .card img {
    height: 168px;
  }

  .projects .container .inner-container .card-container .card .lower-container {
    padding: 0.625rem 1.5rem;
  }

  .projects .container .inner-container .card-container .card .lower-container .info h3 {
    font-size: 1rem;
    line-height: 1.2;
  }

  .projects .container .inner-container .card-container .card .lower-container .links {
    margin: 0 1.25rem 0 auto;

    gap: 0.625rem;
  }

  .projects .container .inner-container .card-container .card .lower-container .links a {
    font-size: 1.375rem;
    color: var(--textWhite);
  }

  .projects .container .inner-container .card-container .card .lower-container .links a:hover {
    color: var(--primaryColor);
  }

  .projects .container .inner-container .card-container .card .lower-container button {
    font-size: 1.375rem;
  }
}

@media screen and (max-width: 360px) {
  /* ----- Card Resize ----- */
  .projects .container .inner-container .card-container .card {
    width: 250px;
    height: 201px;
  }

  .projects .container .inner-container .card-container .card img {
    height: 141px;
  }

  .projects .container .inner-container .card-container .card .lower-container {
    padding: 0.625rem 1.125rem;
  }

  .projects .container .inner-container .card-container .card .lower-container .info h3 {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  .projects .container .inner-container .card-container .card .lower-container .links {
    margin: 0 0.625rem 0 auto;
    gap: 0.625rem;
  }

  .projects .container .inner-container .card-container .card .lower-container .links a {
    font-size: 1.25rem;
    color: var(--textWhite);
  }

  .projects .container .inner-container .card-container .card .lower-container .links a:hover {
    color: var(--primaryColor);
  }

  .projects .container .inner-container .card-container .card .lower-container button {
    font-size: 1.25rem;
  }
}
</style>
