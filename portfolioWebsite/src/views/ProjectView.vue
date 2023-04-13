<script setup></script>

<template>
  <section class="project">
    <!-- Project goes here -->
    <div class="upper-container">
      <h1>Pasta Perfect</h1>
      <div class="info-container">
        <!-- Informations goes here -->
        <div class="info">
          <h3>Role</h3>
          <p>Recepie Website</p>
        </div>
        <div class="info">
          <h3>Year</h3>
          <p>2023</p>
        </div>
        <div class="info">
          <h3>Built with</h3>
          <div>
            <p>TailWind</p>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
      <p class="description">
        In Chronicle everything is made with Blocks that come with pixel perfect design,
        interactivity and motion out of the box. Instead of designing from scratch, simply choose
        the right one from our library of blocks and see the magic unfold.
      </p>
    </div>
    <div class="lower-container">
      <img src="../images/ref.jpg" alt="" />
    </div>
    <div class="button-container">
      <a href="">GitHub</a>
      <a href="">View Site</a>
    </div>
    <button id="back">
      <font-awesome-icon class="icon" :icon="['fas', 'xmark']" />
    </button>
  </section>
</template>

<style scoped>
.project {
  background-color: var(--bgBlack);
  padding: 10rem 12.5rem 6.25rem 12.5rem;
}

.project .upper-container h1 {
  font-size: 8.75rem;
  font-weight: 600;
  line-height: 1;
}

.project .upper-container .info-container {
  margin: 6.25rem 0 10rem 0;
  display: flex;
  gap: 6.25rem;
}

.project .upper-container .info-container .info {
  width: 250px;
  height: auto;
}

.project .upper-container .info-container .info h3 {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--primaryColor);
  font-size: 0.813rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--textNormalGray);
}

.project .upper-container .info-container .info p {
  padding-top: 1.25rem;
  font-size: 1.125rem;
}

.project .upper-container .info-container .info div {
  padding-top: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1.25rem;
}

.project .upper-container .info-container .info div p {
  padding-top: 0;
}

.project .upper-container .description {
  margin-bottom: 6.25rem;
  width: 650px;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--textNormalGray);
}

.project .lower-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project .lower-container img {
  max-width: 100%;
  height: auto;
  border-radius: 40px;
}

.project .button-container {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  bottom: 3.75rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.project .button-container a {
  padding: 0.75rem 1.5rem;
  background-color: var(--primaryColor);
  font-size: 1rem;
  font-weight: 600;
  color: var(--textLightGray);
  border-radius: 60em;
  transition: all 0.25s ease-in-out;
}

.project .button-container a:hover {
  transform: translateY(-5px);
}

.project #back {
  width: 40px;
  height: 40px;
  position: fixed;
  top: 3.75rem;
  right: 3.75rem;
  background-color: var(--primaryColor);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--textLightGray);
  border-radius: 60em;
  border: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}

.project #back .icon {
  transform: translateY(1px) translateX(1px);
}

.project #back:hover {
  transform: translateY(-5px);
}

/* Responsive */
@media screen and (max-width: 1400px) {
  .project {
    padding: 6.25rem 6.25rem 3.75rem 6.25rem;
  }
  .project .upper-container h1 {
    font-size: 6.25rem;
  }

  .project .button-container {
    bottom: 2.5rem;
  }
}

@media screen and (max-width: 1068px) {
  .project {
    padding: 6.25rem 3.75rem 3.75rem 3.75rem;
  }
  .project .upper-container h1 {
    font-size: 5rem;
  }
  .project .upper-container .info-container {
    margin: 3.75rem 0 6.25rem 0;
    flex-direction: column;
    gap: 2rem;
  }

  .project .upper-container .info-container .info {
    width: 500px;
  }

  .project .upper-container .info-container .info h3 {
    padding-bottom: 0.75rem;
  }

  .project .upper-container .info-container .info p {
    padding-top: 0.75rem;
  }

  .project .upper-container .info-container .info div {
    padding-top: 0.75rem;
    gap: 0.125rem;
  }

  .project .upper-container .description {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .project {
    padding: 6.25rem 2rem 3.75rem 2rem;
  }
  .project .upper-container h1 {
    font-size: 3.5rem;
  }

  .project .upper-container .info-container {
    margin-bottom: 3.75rem;
  }
  .project .upper-container .info-container .info {
    width: 250px;
  }

  .project .upper-container .info-container .info h3 {
    padding-bottom: 0.75rem;
    font-size: 0.75rem;
  }

  .project .upper-container .info-container .info p {
    padding-top: 0.75rem;
    font-size: 1rem;
  }

  .project .upper-container .info-container .info div {
    font-size: 1rem;
  }

  .project .upper-container .description {
    margin-bottom: 3.75rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .project .lower-container img {
    border-radius: 25px;
  }

  .project .button-container {
    bottom: 2rem;
  }

  .project #back {
    width: 35px;
    height: 35px;
    top: 2rem;
    right: 2rem;
    font-size: 1.25rem;
  }

  .project #back .icon {
    transform: translateY(0.5px) translateX(0.5px);
  }

  .project .button-container {
    bottom: 2rem;
  }

  .project .button-container a {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }
}

@media screen and (max-width: 560px) {
  .project {
    padding: 5rem 1.25rem 3.75rem 1.25rem;
  }
  .project .upper-container h1 {
    font-size: 3rem;
  }
  .project .upper-container .info-container .info {
    width: 100%;
  }

  .project .lower-container img {
    border-radius: 20px;
  }

  .project #back {
    top: 2rem;
    right: 1.25rem;
  }

  .project .button-container {
    width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 360px) {
  .project {
    padding: 5rem 1.25rem 3.75rem 1.25rem;
  }
  .project .upper-container h1 {
    font-size: 2.125rem;
  }

  .project .lower-container img {
    border-radius: 15px;
  }

  .project #back {
    top: 1.25rem;
    right: 1.25rem;
  }

  .project .button-container {
    bottom: 1.25rem;
  }
}
</style>
