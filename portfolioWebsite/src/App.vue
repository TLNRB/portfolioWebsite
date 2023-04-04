<script setup></script>

<template>
  <section class="home">
    <!-- Home Page Content -->
    <div class="container">
      <div class="content-container">
        <img src="./images/best.JPG" alt="Picture of Norbert Tolnai" />
        <div class="title">
          <h1 id="greet"><span>Hello,</span> I'm</h1>
          <br />
          <h1 id="firstname">Norbert</h1>
          <br />
          <h1 id="surname">Tolnai</h1>
        </div>
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
  padding: 2rem;
  z-index: 5;
}

.container .content-container {
  width: 215px;
  position: relative;
  margin: 206px auto;
}

.container .content-container img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  padding: 6px;
  margin: auto;
  border-radius: 15px;
  border: 2px solid var(--primaryColor);
  background-color: var(--bgBlack);
}

.container .content-container .title {
  padding-top: 8rem;
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
  z-index: -1;
}

#surname {
  margin-top: -2.75rem;
  text-align: center;
}

@media screen and (min-width: 360px) {
  .container .content-container {
    width: 295px;
  }

  .container .content-container img {
    height: 235px;
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
  .container .content-container {
    width: 475px;
  }

  .container .content-container img {
    height: 265px;
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
  .container .content-container {
    width: 700px;
  }

  .container .content-container img {
    height: 332px;
  }

  .container h1 {
    font-size: 7.375rem;
  }

  .container h1 span {
    font-size: 7.375rem;
  }

  #greet span {
    z-index: -1;
  }

  #firstname {
    margin-top: -6rem;
  }

  #surname {
    margin-top: -6rem;
  }
}

@media screen and (min-width: 1068px) {
  .container .content-container {
    width: 950px;
  }

  .container .content-container img {
    height: 420px;
  }

  .container .content-container .title {
    padding-top: 9.5rem;
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
  position: absolute;
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
