import Layout from '@/layouts/'
export default [
  {
    path: '/index',
    component: Layout,
    redirect: '/index/index',
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import(/* webpackChunkName: "index" */'@/page/index/'),
      },
    ],
  },
]