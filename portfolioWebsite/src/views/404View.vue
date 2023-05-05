<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

//404 content animation
const title = ref(null)
const text = ref(null)
const button = ref(null)

const { loading } = defineProps(['loading'])

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    delay: loading ? 1.25 : 0
  })

  tl.from(title.value, {
    y: -50,
    opacity: 0,
    duration: 0.75
  })
    .from(
      text.value,
      {
        y: -25,
        opacity: 0,
        duration: 0.75
      },
      0.3
    )
    .from(
      button.value,
      {
        y: -25,
        opacity: 0,
        duration: 0.75
      },
      0.6
    )

  onUnmounted(() => {
    tl.kill()
  })
})
</script>

<template>
  <section class="container">
    <div class="content">
      <!-- Title -->
      <div class="title" ref="title">
        <h1>4</h1>
        <h1 id="brackets">{}</h1>
        <h1>4</h1>
      </div>

      <p ref="text">Sorry, page not found!</p>
      <div ref="button">
        <RouterLink to="/" class="button">Back to Home</RouterLink>
      </div>
    </div>
    <!-- Gradient Background -->
    <div class="bg bg-1"></div>
    <div class="bg bg-2"></div>
    <div class="bg bg-3"></div>
  </section>
</template>

<style scoped>
.container {
  background-color: var(--bgNormalBlack);
}

.container .content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  padding: 11.58rem 4rem;
  z-index: 5;
}

.container .content .title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.container .content h1 {
  font-size: 15rem;
  font-weight: bold;
  color: var(--textLightGray);
}

.container .content #brackets {
  transform: translateY(1.25rem);
}

.container .content p {
  margin-top: -0.5rem;
  font-size: 2rem;
  color: var(--textNormalGray);
  font-weight: 600;
}

.container .content .button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--primaryColor);
  background-color: var(--bgBlack);
  color: var(--textLightGray);
  border-radius: 60em;
  font-size: 1rem;
  font-weight: 600;

  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s linear;
}
.container .content .button::after {
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
  transition: all 1.25s linear;
  z-index: -1;
}
.container .content .button:hover::after {
  transform: translateY(-50%) rotate(90deg);
}

/* ----- Gradient Background ----- */
.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 1.5rem;
  background-color: var(--bgBlack);
  border-radius: 20px;
  animation: pulse 6s ease-in-out infinite alternate;
}
.bg-1 {
  background-image: radial-gradient(at 67% 64%, var(--bgBlack) 0, transparent 49%),
    radial-gradient(at 95% 120%, var(--primaryColor) 0, transparent 30%);
  z-index: 3;
  animation-delay: 0s;
}
.bg-2 {
  background-image: radial-gradient(at 45% 120%, var(--primaryColor) 0, transparent 30%);
  animation-delay: 4s;
  z-index: 1;
}

.bg-3 {
  background-image: radial-gradient(at 5% 120%, var(--primaryColor) 0, transparent 30%);
  animation-delay: 8s;
  z-index: 2;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  .container .content {
    gap: 2rem;
  }
  .container .content h1 {
    font-size: 10rem;
  }

  .container .content p {
    margin-top: 0;
    font-size: 1.5rem;
  }

  .container .content .button {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }

  /* ----- Gradient Background ----- */
  .bg {
    margin: 0.75rem;
  }
  .bg-1 {
    background-image: radial-gradient(at 67% 64%, var(--bgBlack) 0, transparent 49%),
      radial-gradient(at 95% 130%, var(--primaryColor) 0, transparent 30%);
    z-index: 3;
    animation-delay: 0s;
  }
  .bg-2 {
    display: none;
  }

  .bg-3 {
    background-image: radial-gradient(at 5% 130%, var(--primaryColor) 0, transparent 30%);
    animation-delay: 8s;
    z-index: 2;
  }
}

@media screen and (max-width: 560px) {
  .container .content {
    padding: 11.58rem 2rem;
  }
  .container .content h1 {
    font-size: 7rem;
  }
}

@media screen and (max-width: 360px) {
  .container .content {
    padding: 11.58rem 1.5rem;
  }

  .container .content .title {
    gap: 0.25rem;
  }
  .container .content h1 {
    font-size: 5rem;
  }
  .container .content #brackets {
    transform: translateY(0.75rem);
  }

  .container .content p {
    font-size: 1.25rem;
  }
}
</style>
