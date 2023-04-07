<script setup>
import HomeView from './components/HomeView.vue'
import NavView from './components/NavView.vue'
import AboutView from './components/AboutView.vue'
import FooterView from './components/FooterView.vue'
</script>

<template>
  <NavView />
  <HomeView />
  <AboutView />
  <section class="skills">
    <div class="container">
      <div class="title">
        <h1 class="section-number">03</h1>
        <h1 class="section-name">Skills.</h1>
      </div>
      <div class="content">
        <div class="text">
          In Chronicle everything is made with Blocks that come with pixel perfect design,
          interactivity and motion out of the box. Instead of designing from scratch, simply choose
          the right one from our library of blocks and see the magic unfold.
        </div>
        <div class="skill-container">
          <div class="headline">
            <h2>My Stack</h2>
            <h2>For Development</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterView />
</template>

<style scoped>
.skills {
  background-color: var(--bgBlack);
  background-image: url('./images/bubbleBG.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 6.25rem;
}

.skills .container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 9rem 5rem;
  background-color: rgba(200, 200, 200, 0.1);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);
  border-radius: 40px;
}

.skills .title {
  margin-top: 8rem;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 10rem;
}

.skills .title h1 {
  font-size: 10rem;
  font-weight: 600;
}

.skills .title .section-number {
  border-top: 7px solid var(--primaryColor);
  border-radius: 5px;
  line-height: 1;
}

.skills .title .section-name {
  transform: rotate(-90deg);
  line-height: 1;
}

.skills .container .content {
  width: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem;
}

.skills .container .content .text {
  font-size: 1.25rem;
  font-weight: 500;
}

.skills .container .content .skill-container {
  width: 550px;
  height: 350px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  border: 2px solid var(--primaryColor);
  border-radius: 15px;
}

.skills .container .content .skill-container .headline {
  position: absolute;
  left: 2rem;
  bottom: 1.25rem;
}

.skills .container .content .skill-container .headline h2 {
  font-size: 1.125rem;
  color: var(--textWhite);
  font-weight: 600;
}
.skills .container .content .skill-container .headline h2:last-child {
  color: var(--textNormalGray);
  font-weight: normal;
}
</style>
