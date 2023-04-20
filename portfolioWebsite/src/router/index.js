import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import NotFoundView from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project-:id',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/:catchall(.*)*',
      name: 'notfound',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.path.startsWith('/project-')) {
      // Scroll to top of target page
      return { top: 0 }
    } else {
      // Use default behavior
      return savedPosition
    }
  }
})

export default router
