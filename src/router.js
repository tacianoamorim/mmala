import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Principal',
    component:  () => import('./pages/Principal.vue')
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import('./pages/Formulario.vue')
  },
  {
    path: '/cadastro/:id',
    name: 'Cadastro',
    component:  () => import('./pages/Cadastro.vue'),
    props: true
  },
  {
    path: '/grafico/:id',
    name: 'Grafico',
    component:  () => import('./pages/Grafico.vue'),
    props: true
  } 
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
