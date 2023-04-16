<script setup></script>

<template>
  <footer id="contact">
    <div class="version">
      <p>Version</p>
      <p>2023 &copy; Norbert Tolnai</p>
    </div>
    <div class="socials">
      <p>Socials</p>
      <div class="content-container">
        <a href="">GitHub</a>
        <a href="">LinkedIn</a>
      </div>
    </div>
    <div class="contact">
      <p>Contact</p>
      <div class="content-container">
        <p>tolnainorbi16@gmail.com</p>
        <p>+45 50 15 69 20</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 2.5rem 6.25rem 2rem 6.25rem;
  background-color: var(--bgBlack);
  font-size: 1rem;
  color: var(--textWhite);
  font-weight: normal;
}

footer > div > p:first-child {
  margin-bottom: 0.375rem;
  font-size: 0.813rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--textNormalGray);
}

footer div div {
  display: flex;
  align-items: center;
  gap: 2rem;
}

footer div div a {
  font-size: 1rem;
  color: var(--textWhite);
  font-weight: normal;
  position: relative;
  padding-bottom: 2px;
  transition: 0.35s all ease-in;
}

footer div div a::before {
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--primaryColor);
  height: 2px;
  display: block;
  content: '';
  width: 0;
  transition: 0.35s all ease-in;
}

footer div div a:hover::before {
  width: 100%;
}

footer .contact div {
  flex-direction: column;
  align-items: start;
  gap: 0.375rem;
}

@media screen and (max-width: 1200px) {
  footer {
    padding: 2.5rem 4rem 2rem 4rem;
  }
}

@media screen and (max-width: 1068px) {
  footer div div {
    gap: 1.25rem;
  }
}

@media screen and (max-width: 768px) {
  footer {
    padding: 2.5rem 2rem 2rem 2rem;
    flex-direction: column-reverse;
  }

  footer > div {
    width: 100%;
    padding-bottom: 2rem;
    margin-top: 2rem;
    border-bottom: 1px solid var(--primaryColor);
  }

  footer > div:last-child {
    margin-top: 0;
  }
  footer > div:first-child {
    padding-bottom: 0;
    border-bottom: 0;
  }
}

@media screen and (max-width: 560px) {
  footer {
    padding: 2.5rem 1.5rem 1.5rem 1.5rem;
    font-size: 0.875rem;
  }

  footer > div > p:first-child {
    margin-bottom: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
  }

  footer div div a {
    font-size: 0.875rem;
  }

  footer .contact div {
    gap: 0.25rem;
  }
}
</style>
