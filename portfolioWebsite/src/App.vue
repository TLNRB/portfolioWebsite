<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Preloader from './components/Preloader.vue'

//Preloader
const loading = ref(true)
document.body.style.overflow = 'hidden'

// Simulate a delay to show the preloader
onMounted(() => {
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = 'visible'
  }, 3250)
})

console.log(
  'Disable AddBlocker for displaying country code, weather temperature, current time, and for successful data fetch. '
)
</script>

<template>
  <Preloader class="top" :class="{ display: !loading }" />
  <RouterView :loading="loading" />
</template>

<style scoped>
.display {
  display: none;
}
.top {
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
