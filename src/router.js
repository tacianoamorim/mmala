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
    name: 'form',
    component: () => import('./pages/Form.vue')
  },
  {
    path: '/register/:id',
    name: 'register',
    component:  () => import('./pages/Register.vue'),
    props: true
  },
  {
    path: '/graphic/:pLabels/:pValues/:pInstitution',
    name: 'graphic',
    component:  () => import('./pages/Graphic.vue'),
    props: true
  },
  {
    path: '/model/:categoryId',
    name: 'model',
    component: () => import(/* webpackChunkName: "model" */'./pages/Model.vue'),
    props: true
  } 
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
