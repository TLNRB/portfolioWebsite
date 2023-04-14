<script setup>
import Project from '../components/projects/Project.vue'
import { useRoute } from 'vue-router'
import projects from '../data/projects.json'

const route = useRoute()
const project = projects.find((p) => p.id === parseInt(route.params.id))
</script>

<template>
  <Project :project="project" />
</template>

<style scoped></style>
