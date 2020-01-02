const transToMenu = (menuList) => {
  const menuRouter = [...menuList]
  return menuRouter
}

const transToRouter = (menuList, first = false) => {
  const menuRouter = []
  for (let i = 0; i < menuList.length; i++) {

    const aMenu = menuList[i]
    const isChild = aMenu.children.length !== 0

    // console.log(isChild, first)

    // menu 各个属性
    const path = (() => {
      if (first) {
        return aMenu.path.replace('/index', '')
      } else {
        return aMenu.path
      }
    })()
    const _componentName = (() => {
      if (first) {
        return 'layouts/index'
      } else if (isChild && !first) {
        return 'layouts/blank'
      } else {
        return `views/${aMenu.component}`
      }
    })()
    const component = () => import(`@/${_componentName}.vue`)
    const name = aMenu.name
    const icon = aMenu.icon
    const redirect = (() => {
      if (!isChild && first) {
        return `${path}/index`
      }
      else return ''
    })()
    const children = !isChild ?
      (() => {
        if (first) {
          return [
            {
              component: () => import(`${_componentName}`),
              icon: icon,
              name: name,
              path: 'index',
            },
          ]
        } else {
          return []
        }
      })() :
      (() => {
        return transToRouter(aMenu.children)
      })()

    // 组装对象
    const menuItem = {
      _componentName,

      path,
      component,
      name,
      icon,
      redirect,
      children,
    }
    menuRouter.push(menuItem)
  }
  return menuRouter
}

export { transToMenu, transToRouter }
