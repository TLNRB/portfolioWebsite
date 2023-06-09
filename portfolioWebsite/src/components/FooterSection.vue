<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

//About text scrollTrigger animation
const container = ref(null)
const version = ref(null)
const socials = ref(null)
const contact = ref(null)

onMounted(() => {
  if (window.innerWidth <= 768) {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        start: 'top bottom',
        end: '80% bottom',
        scrub: 1
      }
    })

    tl.from(container.value, {
      x: '-100%'
    })

    tl.to(container.value, {
      x: '0%'
    })

    ScrollTrigger.addEventListener('refresh', () => {
      tl.invalidate()
    })

    onUnmounted(() => {
      tl.kill()
    })
  }
})
</script>

<template>
  <footer id="contact" ref="container">
    <div class="version" ref="version">
      <p>Version</p>
      <p>2023 &copy; Norbert Tolnai</p>
    </div>
    <div class="socials" ref="socials">
      <p>Socials</p>
      <div class="content-container">
        <a href="https://www.linkedin.com/in/norbert-tolnai/" target="_blank">LinkedIn</a>
        <a href="https://github.com/TLNRB" target="_blank">GitHub</a>
      </div>
    </div>
    <div class="contact" ref="contact">
      <p>Contact</p>
      <div class="content-container">
        <a href="mailto:tolnainorbi16@gmail.com">tolnainorbi16@gmail.com</a>
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
  overflow: hidden;
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

footer .contact .icon {
  transform: translateY(0);
  color: var(--textWhite);
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
