/**
 * 基础路由
 * @type { *[] }
 */
export default [
  {
    path: '/',
    name: '主页',
    redirect: '/index',
  },
  {
    path: '/login',
    name: '登录页',
    component: () => import('@/page/login/index'),
    meta: {
      keepAlive: false,
      isTab: false,
      isAuth: false,
    },
  },
  {
    path: '/register',
    name: '注册页',
    component: () => import('@/page/register/index'),
    meta: {
      keepAlive: false,
      isTab: false,
      isAuth: false,
    },
  },
]
