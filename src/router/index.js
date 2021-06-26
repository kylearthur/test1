import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/landing/Login.vue')
  },
  { path: '/login', redirect: { name: 'Login' }},
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/landing/Register.vue')
  },
  {
    path:'/buzzer',
    name:"User",
    component:()=>import('@/views/user/UserLayout.vue'),
    children:[
      {
        path:'dashboard/index',
        name:'UserDashboardIndex',
        component:()=>import('@/views/user/dashboard/Dashboard-index.vue'),
      },
      {
        path:'history/index',
        name:'UserHistoryIndex',
        component:()=>import('@/views/user/history/HistoryIndex.vue'),
      },
      {
        path:'withdraw/index',
        name:'UserWithdrawIndex',
        component:()=>import('@/views/user/withdraw/WithdrawIndex.vue'),
      },
      {
        path:'rules/index',
        name:'UserRulesIndex',
        component:()=>import('@/views/user/rules/RulesIndex.vue'),
      },
      {
        path:'password/index',
        name:'UserPasswordIndex',
        component:()=>import('@/views/user/change_password/ChangePasswordIndex.vue'),
      },
      {
        path:'account/index',
        name:'UserAccountIndex',
        component:()=>import('@/views/user/account/AccountIndex.vue'),
      },
      {
        path:'deposit/index',
        name:'UserDepositIndex',
        component:()=>import('@/views/user/deposit/DepositIndex.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
