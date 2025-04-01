import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home/Home.vue'
const Login = () => import('@/views/Login.vue')
const Category = () => import('@/views/Category/Category.vue')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/Category/:id',
        name: 'Category',
        component: Category,
      }
    ]
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
