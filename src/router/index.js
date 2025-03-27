import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
const Login = () => import('@/views/Login.vue')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
