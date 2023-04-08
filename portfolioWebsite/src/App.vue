<script setup>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <Navbar />
  <Home />
  <About />
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
          <div class="card">
            <img src="./images/ref.jpg" alt="" />
            <div class="lower-container">
              <div class="info">
                <h3>Pasta Perfect</h3>
                <h3>Website</h3>
              </div>
              <div class="links">
                <a href=""><font-awesome-icon :icon="['fab', 'github']" /></a>
                <a href=""><font-awesome-icon :icon="['fas', 'circle-play']" /></a>
              </div>
              <button><font-awesome-icon :icon="['fas', 'circle-info']" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Skills />
  <FooterSection />
</template>

<style scoped>
.projects {
  background-color: var(--bgNormalBlack);
}
.container {
  padding: 6.25rem;
  background-color: var(--bgBlack);
  border-radius: 40px 40px 0 0;
}

.projects .container .title {
  margin-top: 0;
  margin-left: -1.5rem;
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
  margin: 3.75rem 9rem;
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
  gap: 3.75rem;
}

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
</style>
