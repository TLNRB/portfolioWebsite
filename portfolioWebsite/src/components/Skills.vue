<script setup></script>

<template>
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
</template>

<style scoped>
.skills {
  background-color: var(--bgBlack);
  background-image: url('../images/bubbleBG.png');
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

@media screen and (max-width: 1400px) {
  .skills .container {
    padding: 7rem 3rem;
  }

  .skills .container .content {
    width: 400px;
  }

  .skills .container .content .skill-container {
    width: 400px;
    height: 300px;
  }
}

@media screen and (max-width: 1068px) {
  .skills {
    background-image: url('../images/bubbleBGMobileRotated.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 6.25rem 3.25rem;
  }

  .skills .container {
    flex-direction: column;
    padding: 0 2.5rem 2.5rem 2.5rem;
    border-radius: 30px;
  }

  .skills .title {
    transform: translateY(-3rem);
    margin-top: 0;
    margin-left: -3.5rem;
    width: 100%;
    justify-content: start;
    flex-direction: row;
    gap: 1rem;
  }

  .skills .title h1 {
    font-size: 7rem;
  }

  .skills .title .section-number {
    border-top: 0;
    border-bottom: 4px solid var(--primaryColor);
    border-radius: 3px;
    transform: rotate(-90deg);
  }

  .skills .title .section-name {
    transform: rotate(0);
  }

  .skills .container .content {
    width: 100%;
    margin-top: 3rem;
    gap: 3.75rem;
  }

  .skills .container .content .text {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .skills .container .content .skill-container {
    width: 500px;
    height: 350px;
    margin: 0 auto;
    padding: 1.25rem 2rem;
    border: 2px solid var(--primaryColor);
    border-radius: 15px;
  }
}

@media screen and (max-width: 768px) {
  .skills {
    padding: 6.25rem 2rem 3.75rem 2rem;
  }
  .skills .container {
    padding: 0 2rem 2rem 2rem;
  }

  .skills .container .content .skill-container {
    width: 350px;
    height: 450px;
  }
}

@media screen and (max-width: 560px) {
  .skills {
    padding: 3.75rem 1.5rem;
  }
  .skills .container {
    padding: 0 1.25rem 1.25rem 1.25rem;
    border-radius: 20px;
  }
  .skills .title {
    transform: translateY(-1.75rem);
    margin-left: -1.5rem;
  }

  .skills .title h1 {
    font-size: 4rem;
  }

  .skills .container .content {
    margin-top: 2rem;
  }

  .skills .container .content .skill-container {
    width: 250px;
    height: 350px;
    border-radius: 10px;
    padding: 1.25rem;
  }

  .skills .container .content .text {
    font-size: 1rem;
  }

  .skills .container .content .skill-container .headline {
    position: absolute;
    left: 1.25rem;
    bottom: 1.25rem;
  }

  .skills .container .content .skill-container .headline h2:first-child {
    margin-bottom: -0.25rem;
  }

  .skills .container .content .skill-container .headline h2 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 360px) {
  .skills .title {
    transform: translateY(-1.25rem);
    margin-left: -1rem;
    gap: 0.75rem;
  }

  .skills .title h1 {
    font-size: 2.5rem;
  }

  .skills .title .section-number {
    border-bottom: 3px solid var(--primaryColor);
  }

  .skills .container .content {
    margin-top: 2rem;
  }

  .skills .container .content .skill-container {
    width: 175px;
    height: 400px;
  }
}
</style>