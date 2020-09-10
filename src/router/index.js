import Vue from 'vue'
import VueRouter from 'vue-router'

import Template from '@/containers/Template.vue'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')

const ClienteList = () => import('@/views/Cliente/List.vue')
const ClienteForm = () => import('@/views/Cliente/Form.vue')

const Login = () => import('@/views/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Template,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Home,
      },
      {
        path: 'about',
        name: 'Sobre',
        component: About,
      },
      {
        path: 'cliente',
        name: 'Clientes',
        component: {
          render (c) { return c('router-view') }
        },
        redirect: '/cliente/list',
        children: [
          {
            path: 'list',
            name: 'Listagem de Clientes',
            component: ClienteList,
          },
          {
            path: 'new',
            name: 'Novo Cliente',
            component: ClienteForm,
          },
          {
            path: ':id',
            name: 'Editar Cliente',
            component: ClienteForm,
          },
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
