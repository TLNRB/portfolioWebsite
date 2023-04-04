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
      <div class="bg bg-1"></div>
      <div class="bg bg-2"></div>
      <div class="bg bg-3"></div>
    </div>
  </section>
</template>

<style scoped>
.home {
  padding: 0.75rem;
  background-color: var(--bgNormalBlack);
}

.container {
  min-height: 100vh;
  padding: 0.75rem;
  background-color: var(--bgBlack);
  border-radius: 20px;
}

.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: pulse 6s ease-in-out infinite alternate;
}
.bg-1 {
  background-color: var(--bgBlack);
  background-image: radial-gradient(at 67% 64%, var(--bgBlack) 0, transparent 49%),
    radial-gradient(at 95% 95%, var(--primaryColor) 0, transparent 30%);
  z-index: 3;
  animation-delay: 0s;
}
.bg-2 {
  background-color: var(--bgBlack);
  background-image: radial-gradient(at 45% 110%, var(--primaryColor) 0, transparent 30%);
  animation-delay: 4s;
  z-index: 1;
}

.bg-3 {
  background-color: var(--bgBlack);
  background-image: radial-gradient(at 5% 100%, var(--primaryColor) 0, transparent 30%);
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
</style>
