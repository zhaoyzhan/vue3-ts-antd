import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页',
      aP: '/'
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about/aindex',
    meta: {
      title: '关于',
      aP: '/about'
    },
    children: [
      {
        path: 'aindex',
        name: 'Aindex',
        component: () => import('@/views/About.vue'),
        meta: {
          title: '关于',
        },
      },
    ],
  },
  {
    path: '/car',
    component: Layout,
    redirect: '/car/cindex',
    meta: {
      title: '汽车',
      aP: '/car'
    },
    children: [
      {
        path: 'cindex',
        name: 'Cindex',
        component: () => import('@/views/Car.vue'),
        meta: {
          title: '汽车',
        },
      },
    ],
  },
  {
    path: '/login',
    component: Layout,
    redirect: '/login/lindex',
    meta: {
      title: '登录',
      aP: '/login'
    },
    children: [
      {
        path: 'lindex',
        name: 'lindex',
        component: () => import('@/views/Login.vue'),
        meta: {
          title: '登录',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
