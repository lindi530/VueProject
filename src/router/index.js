import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from '../views/NotFound.vue'
import RegisterView from '../views/RegisterView.vue'
import UserList from '../views/UserList.vue'
import UserState from '../views/UserState.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/userstate',
    name: 'userstate',
    component: UserState
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
