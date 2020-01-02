export const menuData = [
  {
    id: 1, //id唯一ID标识符
    name: '系统设置',
    path: '/system_setting',
    icon: 'el-icon-s-tools',
    component: 'Layout',
    children: [
      {
        id: 2, //id唯一ID标识符
        name: '用户管理',
        path: 'user',
        icon: '',
        component: 'SystemSetting/User/index',
        children: [],
      },
      {
        id: 3, //id唯一ID标识符
        name: '菜单管理',
        path: 'menu',
        icon: '',
        component: 'SystemSetting/Menu/index',
        children: [],
      },
      {
        id: 4, //id唯一ID标识符
        name: '权限管理',
        path: 'role',
        icon: '',
        component: 'SystemSetting/Role/index',
        children: [],
      },
    ],
  },
]
