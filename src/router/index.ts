import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { getToken } from '@/utils';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/house',
    name: 'house',
    meta: {
      title: "新房列表",
      keepAlive: true,
    },
    component: () => import('@/views/house/index.vue'),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import('@/views/login/index.vue'),
  },  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于我们",
      keepAlive: true
    },
    component: () => import('@/views/about/index.vue'),
  },{
    path: "/shareLog",
    name: "shareLog",
    meta: {
      title: "分享记录",
      keepAlive: true
    },
    component: () => import('@/views/shareLog/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {

  const hasToken = getToken()

  if(hasToken){
    if(to.path === '/login'){
      next('/')
    }else{
      next();
    }
  }else{
    if(to.path === '/login'){
      next()
    }else{
      next(`/login?redirect=${to.path}`)
    }
  }
})

export default router;
