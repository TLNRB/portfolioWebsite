<script setup></script>

<template>
  <section class="about">
    <div class="title">
      <h1 class="section-number">01</h1>
      <h1 class="section-name">About.</h1>
    </div>
    <div class="content">
      <p>
        In Chronicle everything is made with Blocks that come with pixel perfect design,
        interactivity and motion out of the box. Instead of designing from scratch, simply choose
        the right one from our library of blocks and see the magic unfold.
      </p>
      <div class="btn-container">
        <a href="" download="">
          <span>Download CV</span>
          <font-awesome-icon class="icon" :icon="['fas', 'download']" />
        </a>
        <a href="">
          <span>Watch CV</span>
          <font-awesome-icon class="icon" :icon="['fas', 'play']" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  width: 100%;
  background-color: var(--bgNormalBlack);
  padding: 6.25rem;
  display: flex;
  align-items: center;
}

.about .title {
  margin-top: 11rem;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 14rem;
}

.about .title h1 {
  font-size: 10rem;
  font-weight: 600;
}

.about .title .section-number {
  border-top: 7px solid var(--primaryColor);
  border-radius: 5px;
  line-height: 1;
}

.about .title .section-name {
  transform: rotate(-90deg);
  line-height: 1;
}

.about .content {
  width: 800px;
  margin: 0 auto;
}

.about .content p {
  font-size: 3.75rem;
  font-weight: 600;
  line-height: 67px;
  color: var(--textDarkGray);
}

.about .content .btn-container {
  margin-top: 3.75rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.about .content .btn-container a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--textLightGray);
  color: var(--textLightGray);
  border-radius: 60em;
  font-size: 1rem;
}

.about .content .btn-container a:hover {
  border: 1px solid var(--primaryColor);
}

.about .content .btn-container a span {
  margin-top: 1px;
  font-size: 1rem;
  font-weight: 600;
}

/* ----- Responsive ----- */
@media screen and (max-width: 1400px) {
  .about .content {
    width: 600px;
  }
}

@media screen and (max-width: 1200px) {
  .about {
    padding: 4rem;
  }
}

@media screen and (max-width: 1068px) {
  .about {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .about .title {
    margin-top: 2.25rem;
    margin-left: -1.5rem;
    margin-bottom: 3.75rem;
    width: 100%;
    justify-content: start;
    flex-direction: row;
    gap: 2rem;
  }

  .about .title h1 {
    font-size: 7rem;
  }

  .about .title .section-number {
    border-top: 0;
    border-bottom: 4px solid var(--primaryColor);
    border-radius: 3px;
    transform: rotate(-90deg);
  }

  .about .title .section-name {
    transform: rotate(0);
  }

  .about .content {
    width: 100%;
  }

  .about .content p {
    font-size: 2.25rem;
    line-height: 43px;
  }

  .about .content .btn-container {
    margin: 2.5rem 0;
  }
}

@media screen and (max-width: 768px) {
  .about {
    padding: 2rem;
  }

  .about .title {
    margin-top: 2rem;
    margin-left: -1.5rem;
    margin-bottom: 3.5rem;
    gap: 1.5rem;
  }

  .about .content {
    width: 100%;
  }

  .about .content p {
    font-size: 2rem;
    line-height: 40px;
  }

  .about .content .btn-container {
    margin-bottom: 4.875rem;
    gap: 1.5rem;
  }

  .about .content .btn-container a {
    gap: 1rem;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }

  .about .content .btn-container a span {
    font-size: 0.875rem;
  }
}

@media screen and (max-width: 560px) {
  .about {
    padding: 2rem 1.5rem;
  }
  .about .title {
    margin-left: -0.5rem;
  }

  .about .title h1 {
    font-size: 4rem;
  }
  .about .content .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 360px) {
  .about .title {
    margin-left: -0.25rem;
    margin-bottom: 2.5rem;
    gap: 1rem;
  }

  .about .title h1 {
    font-size: 2.5rem;
  }

  .about .title .section-number {
    border-bottom: 3px solid var(--primaryColor);
  }

  .about .content p {
    font-size: 1.5rem;
    line-height: 35px;
  }
}
</style>