import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component:  () => import('./pages/Main.vue')
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import('./pages/Formulario.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component:  () => import('./pages/Cadastro.vue')
  } 
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
