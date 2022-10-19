import { createRouter, createWebHistory } from 'vue-router'
import calc from '../views/calc.vue'
import StringAppView from '../views/StringAppView.vue'
import Dashboard from '../views/Dashboard.vue'
import quizapp from '../views/quizapp.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/calc',
    name: 'calc',
    component: calc
    },

    {
      path: '/quizapp',
      name: 'quizapp',
      component: quizapp
    },

  ]
})

export default router
