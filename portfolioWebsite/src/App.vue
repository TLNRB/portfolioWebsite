<script setup></script>

<template>
  <section class="home">
    <!-- Home Page Content -->
    <div class="container">
      <!-- <img src="./images/best.JPG" alt="Picture of Norbert Tolnai" /> -->
      <div class="title">
        <h1 id="greet"><span>Hello,</span> I'm</h1>
        <br />
        <h1 id="firstname">Norbert</h1>
        <br />
        <h1 id="surname">Tolnai</h1>
      </div>
    </div>

    <!-- Gradient Background -->
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
  padding: 2rem;
  z-index: 5;
}

.container .title {
  width: 215px;
  margin: auto;
  /* margin-top: 356px; */
}

.container h1 {
  font-size: 2.5rem;
  font-weight: 500;
}

.container h1 span {
  font-size: 2.5rem;
  font-weight: 500;
}

#firstname {
  margin-top: -2.75rem;
  text-align: right;
}

#surname {
  margin-top: -2.75rem;
  text-align: center;
}

@media screen and (min-width: 360px) {
  .container .title {
    width: 295px;
  }

  .container h1 {
    font-size: 3.75rem;
  }

  .container h1 span {
    font-size: 3.75rem;
  }

  #firstname {
    margin-top: -3.5rem;
  }

  #surname {
    margin-top: -3.5rem;
  }
}

@media screen and (min-width: 560px) {
  .container .title {
    width: 475px;
  }

  .container h1 {
    font-size: 5rem;
  }

  .container h1 span {
    font-size: 5rem;
  }

  #firstname {
    margin-top: -4.5rem;
  }

  #surname {
    margin-top: -4.5rem;
  }
}

@media screen and (min-width: 768px) {
  .container .title {
    width: 700px;
  }

  .container h1 {
    font-size: 7.375rem;
  }

  .container h1 span {
    font-size: 7.375rem;
  }

  #firstname {
    margin-top: -6rem;
  }

  #surname {
    margin-top: -6rem;
  }
}

@media screen and (min-width: 1068px) {
  .container .title {
    width: 950px;
  }

  .container h1 {
    font-size: 10rem;
    font-weight: 600;
  }

  .container h1 span {
    font-size: 10rem;
    font-weight: 600;
  }

  #firstname {
    margin-top: -8rem;
  }

  #surname {
    margin-top: -8rem;
  }
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
