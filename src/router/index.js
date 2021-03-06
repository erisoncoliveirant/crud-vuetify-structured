import Vue from 'vue'
import VueRouter from 'vue-router'

import publicRoutes from './public.routes'

Vue.use(VueRouter)

const routes = [...publicRoutes]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
