<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const preLoader = ref(null)

onMounted(() => {
  gsap.to(preLoader.value, {
    y: '-100%',
    duration: 0.5,
    ease: 'Power1.easeIn',
    delay: 1.25
  })
})
</script>

<template>
  <div class="preloader" ref="preLoader">
    <div class="container">
      <div class="text">
        <p>Loading</p>
        <div class="dots">
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preloader {
  background-color: var(--bgNormalBlack);
  overflow: hidden;
}

.preloader .container {
  min-height: 100vh;
  padding: 20rem 0rem;
  background-color: var(--bgBlack);
  display: flex;
  justify-content: center;
  align-items: center;
}

.preloader .container .text {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
}

.preloader .container .text p {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--textNormalGray);
  letter-spacing: 1px;
}

.preloader .container .text .dots {
  display: flex;
  gap: 0.125rem;
}

.preloader .container .text .dots p {
  font-size: 2rem;
  font-weight: bold;
  color: var(--textNormalGray);
  animation: bounce 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite alternate;
}

.preloader .container .text .dots p:nth-child(1) {
  animation-delay: 0.05s;
}
.preloader .container .text .dots p:nth-child(2) {
  animation-delay: 0.15s;
}
.preloader .container .text .dots p:nth-child(3) {
  animation-delay: 0.25s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-0.5rem);
  }
}

.preloader .container .circle-container {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 350px;
  height: 350px;
}

.preloader .container .circle-container .circle {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background-color: var(--bgPreLoader);
}

.preloader .container .circle-container .circle:nth-of-type(1) {
  width: 300px;
  height: 280px;
  animation: rotation 7s infinite linear;
  box-shadow: 0 0 1px 0 var(--primaryColor), inset 0 0 10px 0 var(--primaryColor);
}
.preloader .circle-container .circle:nth-of-type(2) {
  width: 280px;
  height: 300px;
  animation: rotation 11s infinite linear;
  box-shadow: 0 0 1px 0 var(--preLoaderCircle2), inset 0 0 10px 0 var(--preLoaderCircle2);
}
.preloader .container .circle-container .circle:nth-of-type(3) {
  width: 310px;
  height: 290px;
  animation: rotation 6s infinite linear;
  box-shadow: 0 0 1px 0 var(--preLoaderCircle3), inset 0 0 10px 0 var(--preLoaderCircle3);
}
.preloader .container .circle-container .circle:nth-of-type(4) {
  width: 290px;
  height: 310px;
  animation: rotation 16s infinite linear;
  box-shadow: 0 0 1px 0 var(--preLoaderCircle4), inset 0 0 10px 0 var(--preLoaderCircle4);
}

@keyframes rotation {
  100% {
    transform: rotate(360deg);
  }
}

/* Resonsive */
@media screen and (max-width: 1400px) {
  .preloader .container {
    padding: 15rem 0rem;
  }
}

@media screen and (max-width: 768px) {
  .preloader .container .text p {
    font-size: 1.25rem;
  }

  .preloader .container .text .dots p {
    font-size: 1.75rem;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-0.375rem);
    }
  }

  .preloader .container .circle-container {
    width: 300px;
    height: 300px;
  }

  .preloader .container .circle-container .circle:nth-of-type(1) {
    width: 250px;
    height: 230px;
  }
  .preloader .circle-container .circle:nth-of-type(2) {
    width: 230px;
    height: 250px;
  }
  .preloader .container .circle-container .circle:nth-of-type(3) {
    width: 260px;
    height: 240px;
  }
  .preloader .container .circle-container .circle:nth-of-type(4) {
    width: 240px;
    height: 260px;
  }
}

@media screen and (max-width: 560px) {
  .preloader .container .text p {
    font-size: 1.125rem;
  }

  .preloader .container .text .dots {
    gap: 0;
  }

  .preloader .container .text .dots p {
    font-size: 1.5rem;
  }

  .preloader .container .circle-container {
    width: 270px;
    height: 270px;
  }

  .preloader .container .circle-container .circle:nth-of-type(1) {
    width: 220px;
    height: 200px;
  }
  .preloader .circle-container .circle:nth-of-type(2) {
    width: 200px;
    height: 220px;
  }
  .preloader .container .circle-container .circle:nth-of-type(3) {
    width: 230px;
    height: 210px;
  }
  .preloader .container .circle-container .circle:nth-of-type(4) {
    width: 210px;
    height: 230px;
  }
}

@media screen and (max-width: 360px) {
  .preloader .container .text p {
    font-size: 1rem;
  }

  .preloader .container .text .dots p {
    font-size: 1.375rem;
  }

  .preloader .container .circle-container {
    width: 230px;
    height: 230px;
  }

  .preloader .container .circle-container .circle:nth-of-type(1) {
    width: 200px;
    height: 180px;
  }
  .preloader .circle-container .circle:nth-of-type(2) {
    width: 180px;
    height: 200px;
  }
  .preloader .container .circle-container .circle:nth-of-type(3) {
    width: 210px;
    height: 190px;
  }
  .preloader .container .circle-container .circle:nth-of-type(4) {
    width: 190px;
    height: 210px;
  }
}
</style>
