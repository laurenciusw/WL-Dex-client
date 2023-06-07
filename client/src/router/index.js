import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import detailPage from '../views/detailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detailPage
    }
  ]
})

export default router
