<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

//Home content animation
const title = ref(null)
const roleInfo = ref(null)
const yearInfo = ref(null)
const builtInfo = ref(null)
const description = ref(null)
const image = ref(null)
const buttons = ref(null)
const buttonBack = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline()

  tl.from(title.value, {
    y: window.innerWidth > 1068 ? -75 : -50,
    opacity: 0,
    duration: 0.75
  })
    .from(
      [roleInfo.value, yearInfo.value, builtInfo.value],
      {
        y: window.innerWidth > 1068 ? -50 : -25,
        opacity: 0,
        duration: window.innerWidth > 1068 ? 0.75 : 0.5,
        stagger: 0.25
      },
      0.75
    )
    .from(description.value, {
      x: window.innerWidth > 1068 ? -50 : -25,
      opacity: 0,
      duration: window.innerWidth > 1068 ? 0.75 : 0.5
    })
    .from([image.value, buttons.value], {
      y: window.innerWidth > 1068 ? 50 : 25,
      opacity: 0,
      duration: window.innerWidth > 1068 ? 0.75 : 0.5
    })
    .from(
      buttonBack.value,
      {
        y: window.innerWidth > 1068 ? -75 : -25,
        opacity: 0,
        duration: 0.5
      },
      0
    )

  tl.to(buttonBack.value, { y: 0, opacity: 1, duration: 0.5 })

  onUnmounted(() => {
    tl.kill()
  })
})

const { project } = defineProps(['project'])

//Goes back to previous page same position
const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<template>
  <section class="project">
    <!-- Project goes here -->
    <div class="upper-container">
      <h1 ref="title">{{ project.title }}</h1>
      <div class="info-container">
        <!-- Informations goes here -->
        <div class="info" ref="roleInfo">
          <h3>Role</h3>
          <p>{{ project.role }}</p>
        </div>
        <div class="info" ref="yearInfo">
          <h3>Year</h3>
          <p>{{ project.year }}</p>
        </div>
        <div class="info" ref="builtInfo">
          <h3>Built with</h3>
          <div>
            <p v-for="item in project.built">{{ item }}</p>
          </div>
        </div>
      </div>
      <p class="description" ref="description">
        {{ project.description }}
      </p>
    </div>
    <div class="lower-container" ref="image">
      <img :src="project.img" alt="Project Image" />
    </div>
    <div class="button-container" ref="buttons">
      <a :href="project.gitHub" target="_blank">GitHub</a>
      <a :href="project.liveServer" target="_blank">View Site</a>
    </div>
    <button @click="goBack" id="back" ref="buttonBack">
      <font-awesome-icon class="icon" :icon="['fas', 'xmark']" />
    </button>
  </section>
</template>

<style scoped>
.project {
  background-color: var(--bgBlack);
  padding: 10rem 12.5rem 6.25rem 12.5rem;
}

.project .upper-container h1 {
  font-size: 8.75rem;
  font-weight: 600;
  line-height: 1;
}

.project .upper-container .info-container {
  margin: 6.25rem 0 10rem 0;
  display: flex;
  gap: 6.25rem;
}

.project .upper-container .info-container .info {
  width: 250px;
  height: auto;
}

.project .upper-container .info-container .info h3 {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--primaryColor);
  font-size: 0.813rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--textNormalGray);
}

.project .upper-container .info-container .info p {
  padding-top: 1.25rem;
  font-size: 1.125rem;
}

.project .upper-container .info-container .info div {
  padding-top: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1.25rem;
}

.project .upper-container .info-container .info div p {
  padding-top: 0;
}

.project .upper-container .description {
  margin-bottom: 6.25rem;
  width: 650px;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--textNormalGray);
}

.project .lower-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project .lower-container img {
  max-width: 100%;
  height: auto;
  border-radius: 40px;
}

.project .button-container {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  bottom: 3.75rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.project .button-container a {
  padding: 0.75rem 1.5rem;
  background-color: var(--bgBlack);
  font-size: 1rem;
  font-weight: 600;
  color: var(--textLightGray);
  border: 1px solid var(--primaryColor);
  border-radius: 60em;

  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s linear;
}
.project .button-container a::after {
  content: '';
  position: absolute;
  bottom: -35px;
  left: -25px;
  height: 260px;
  width: 230px;
  border-radius: 38%;
  box-sizing: border-box;
  background-color: var(--primaryColor);
  transform: translateY(0) rotate(0deg);
  transition: all 0.3s linear;
  transition: transform 1.25s linear;
  z-index: -1;
}
.project .button-container a:hover::after {
  transform: translateY(-50%) rotate(90deg);
}

.project #back {
  width: 40px;
  height: 40px;
  position: fixed;
  top: 3.75rem;
  right: 3.75rem;
  background-color: var(--bgBlack);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--textLightGray);
  border: 1px solid var(--primaryColor);
  border-radius: 60em;
  cursor: pointer;

  overflow: hidden;
  z-index: 1;
  transition: all 0.3s linear;
}
.project #back::after {
  content: '';
  position: absolute;
  bottom: -35px;
  left: -25px;
  height: 260px;
  width: 230px;
  border-radius: 38%;
  box-sizing: border-box;
  background-color: var(--primaryColor);
  transform: translateY(0) rotate(0deg);
  transition: all 0.3s linear;
  transition: transform 1.25s linear;
  z-index: -1;
}
.project #back:hover::after {
  transform: translateY(-50%) rotate(90deg);
}

.project #back .icon {
  margin: 50% 0 0 50%;
  transform: translateY(-48%) translateX(-52%);
}

/* Responsive */
@media screen and (max-width: 1400px) {
  .project {
    padding: 6.25rem 6.25rem 3.75rem 6.25rem;
  }
  .project .upper-container h1 {
    font-size: 6.25rem;
  }

  .project .button-container {
    bottom: 2.5rem;
  }
}

@media screen and (max-width: 1068px) {
  .project {
    padding: 6.25rem 3.75rem 3.75rem 3.75rem;
  }
  .project .upper-container h1 {
    font-size: 5rem;
  }
  .project .upper-container .info-container {
    margin: 3.75rem 0 6.25rem 0;
    flex-direction: column;
    gap: 2rem;
  }

  .project .upper-container .info-container .info {
    width: 500px;
  }

  .project .upper-container .info-container .info h3 {
    padding-bottom: 0.75rem;
  }

  .project .upper-container .info-container .info p {
    padding-top: 0.75rem;
  }

  .project .upper-container .info-container .info div {
    padding-top: 0.75rem;
    gap: 0.125rem;
  }

  .project .upper-container .description {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .project {
    padding: 6.25rem 2rem 3.75rem 2rem;
  }
  .project .upper-container h1 {
    font-size: 3.5rem;
  }

  .project .upper-container .info-container {
    margin-bottom: 3.75rem;
  }
  .project .upper-container .info-container .info {
    width: 250px;
  }

  .project .upper-container .info-container .info h3 {
    padding-bottom: 0.75rem;
    font-size: 0.75rem;
  }

  .project .upper-container .info-container .info p {
    padding-top: 0.75rem;
    font-size: 1rem;
  }

  .project .upper-container .info-container .info div {
    font-size: 1rem;
  }

  .project .upper-container .description {
    margin-bottom: 3.75rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .project .lower-container img {
    border-radius: 25px;
  }

  .project .button-container {
    bottom: 2rem;
  }

  .project #back {
    width: 35px;
    height: 35px;
    top: 2rem;
    right: 2rem;
    font-size: 1.25rem;
  }

  .project #back .icon {
    transform: translateY(-48%) translateX(-56%);
  }

  .project .button-container {
    bottom: 2rem;
  }

  .project .button-container a {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }
}

@media screen and (max-width: 560px) {
  .project {
    padding: 5rem 1.25rem 3.75rem 1.25rem;
  }
  .project .upper-container h1 {
    font-size: 3rem;
  }
  .project .upper-container .info-container .info {
    width: 100%;
  }

  .project .lower-container img {
    border-radius: 20px;
  }

  .project #back {
    top: 2rem;
    right: 1.25rem;
  }

  .project .button-container {
    width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 360px) {
  .project {
    padding: 5rem 1.25rem 3.75rem 1.25rem;
  }
  .project .upper-container h1 {
    font-size: 2.125rem;
  }

  .project .lower-container img {
    border-radius: 15px;
  }

  .project #back {
    top: 1.25rem;
    right: 1.25rem;
  }

  .project .button-container {
    bottom: 1.25rem;
  }
}
</style>
