import { createRouter, createWebHistory } from 'vue-router'
import Cookiebar from './pages/CookiebarPage.vue'
import Formulario from './pages/Formulario.vue'
import Home from './pages/Home.vue'
import Signin from './pages/Signin.vue'
import Teste from './pages/Teste.vue'

const routes = [
  {
    path: '/wbc/quickstarts/govbr-ds-wbc-quickstart-vue/',
    component: Home,
    name: 'Home',
    meta: {
      label: 'Página Inicial',
    },
  },
  {
    path: '/wbc/quickstarts/govbr-ds-wbc-quickstart-vue/formulario',
    component: Formulario,
    name: 'Formulário',
    meta: {
      label: 'Formulário',
    },
  },
  {
    path: '/wbc/quickstarts/govbr-ds-wbc-quickstart-vue/sign-in',
    component: Signin,
    name: 'Sign-in',
    meta: {
      label: 'Sign-in',
    },
  },
  {
    path: '/wbc/quickstarts/govbr-ds-wbc-quickstart-vue/cookiebar',
    component: Cookiebar,
    name: 'Cookiebar',
    meta: {
      label: 'Cookiebar',
    },
  },
  {
    path: '/wbc/quickstarts/govbr-ds-wbc-quickstart-vue/teste',
    component: Teste,
    name: 'Teste',
    meta: {
      label: 'Teste',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
