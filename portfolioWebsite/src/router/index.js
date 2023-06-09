import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import NotFoundView from '../views/404View.vue'
import projects from '../data/projects'

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
      component: ProjectView,
      beforeEnter(to) {
        const id = parseInt(to.params.id)
        const localProject = projects
        const exists = localProject.some((project) => project.id === id)

        if (!exists) {
          return {
            name: 'notfound',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          }
        }
      }
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
