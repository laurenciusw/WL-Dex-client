import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import detailPage from '../views/detailPage.vue'
import myPokePage from '../views/myPokePage.vue'

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
    },
    {
      path: '/mypokepage',
      name: 'mypokepage',
      component: myPokePage
    }
  ]
})

export default router
