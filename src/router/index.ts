import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import StoryPage from '@/views/StoryPage.vue'
import BlogPage from '@/views/Blog.vue'
import TriDesDechets from '@/views/articles/TriDesDechets.vue'
import TriDesAmpoules from '@/views/articles/TriDesAmpoules.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/notre-histoire',
      name: 'story-page',
      component: StoryPage
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage
    },
    {
      path: '/article/tri-des-dechets',
      name: 'tri-des-dechets',
      component: TriDesDechets
    },
    {
      path: '/article/tri-des-ampoules',
      name: 'tri-des-ampoules',
      component: TriDesAmpoules
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, behavior: 'smooth',
      }
    }
  }
})

export default router
