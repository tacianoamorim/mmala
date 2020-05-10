import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'main',
    component:  () => import('./pages/Main.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('./pages/Form.vue')
  },
  {
    path: '/register/:id',
    name: 'Register',
    component:  () => import('./pages/Register.vue'),
    props: true
  },
  {
    path: '/graphic/:pChartdata/:pOptions',
    name: 'Graphic',
    component:  () => import('./pages/Graphic.vue'),
    props: true
  },
  {
    path: '/model/:category',
    name: 'Model',
    component: () => import('./pages/Model.vue'),
    props: true
  } 
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
