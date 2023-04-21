<script setup>
import Preloader from './components/Preloader.vue'
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

//Preloader
const loading = ref(true)

// Simulate a delay to show the preloader
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

console.log(
  'Disable AddBlocker for displaying country code, weather temperature, current time, and for successful data fetch. '
)
</script>

<template>
  <Preloader v-if="loading" />
  <RouterView v-else />
</template>

<style scoped></style>
