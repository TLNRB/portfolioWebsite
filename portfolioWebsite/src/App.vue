<script setup></script>

<template>
  <section class="home">
    <div class="container">
      <!-- <img src="./images/best.JPG" alt="Picture of Norbert Tolnai" /> -->
      <h1 class="title">
        Hello, I'm<br />
        Norbert<br />
        Tolnai
      </h1>
    </div>
    <div class="bg bg-1"></div>
    <div class="bg bg-2"></div>
    <div class="bg bg-3"></div>
  </section>
</template>

<style scoped>
.home {
  background-color: var(--bgNormalBlack);
}

.container {
  min-height: 100vh;
  padding: 0.75rem;
  z-index: 5;
}
/* ----- Gradient Background ----- */
.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0.75rem;
  background-color: var(--bgBlack);
  border-radius: 20px;
  animation: pulse 6s ease-in-out infinite alternate;
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

@keyframes pulse {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@media screen and (min-width: 768px) {
  .bg-1 {
    background-image: radial-gradient(at 67% 64%, var(--bgBlack) 0, transparent 49%),
      radial-gradient(at 95% 120%, var(--primaryColor) 0, transparent 30%);
  }
  .bg-2 {
    display: block;
    background-image: radial-gradient(at 45% 120%, var(--primaryColor) 0, transparent 30%);
    animation-delay: 4s;
    z-index: 1;
  }

  .bg-3 {
    background-image: radial-gradient(at 5% 120%, var(--primaryColor) 0, transparent 30%);
    animation-delay: 8s;
    z-index: 2;
  }
}
</style>
