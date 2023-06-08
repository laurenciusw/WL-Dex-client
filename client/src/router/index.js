import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import detailPage from '../views/detailPage.vue'
import myPokePage from '../views/myPokePage.vue'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'
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
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name == 'mypokepage' && !isAuthenticated) {
    next('login')
  } else if (
    (to.name == 'login' && isAuthenticated) ||
    (to.name == 'register' && isAuthenticated)
  ) {
    next('/')
  } else {
    next()
  }
})

export default router
