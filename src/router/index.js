import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: function () {
      return import('../views/Index.vue')
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: function () {
      return import('../views/Form.vue')
    }
  },
  {
    path: '/check',
    name: 'Check',
    component: function () {
      return import('../views/Check.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/kanri',
    name: 'Kanri',
    component: function () {
      return import('../views/Kanri.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
