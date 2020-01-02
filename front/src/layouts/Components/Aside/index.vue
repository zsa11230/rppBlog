<template>
  <el-aside class="menu-sider" :width="asiderWidth">
    <div class="menu-logo">
      <el-link v-if="siderbar_collapsed" @click="$openPage('/')">V</el-link>
      <el-link v-else @click="$openPage('/')">Vec Pro 中台系统</el-link>
    </div>
    <el-menu :default-active="currentPath" :collapse="siderbar_collapsed">
      <el-menu-item index="/index/index" @click="$openPage('/index/index')">
        <i class="el-icon-menu"></i>
        <span slot="title">
          工作台
        </span>
      </el-menu-item>
      <el-submenu :index="item.path" v-for="item in menuList" :key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <span slot="title">{{item.name}}</span>
          <el-menu-item :index="`${item.path}/${sitem.path}`" v-for="sitem in item.children" :key="sitem.id" @click="$openPage(`${item.path}/${sitem.path}`)">{{sitem.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { menuData } from '@/views/SystemSetting/config'
import { transToMenu } from '@/utils/Menu'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      menuList: transToMenu(menuData),
    }
  },
  computed: {
    ...mapGetters(['siderbar_collapsed']),
    asiderWidth () {
      return this.siderbar_collapsed ? '64px' : '200px'
    },
    currentPath () {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-logo {
  height: 56px;
  line-height: 56px;
  text-align: center;
}
.menu-sider {
  // width: auto;
  z-index: 10;
  box-shadow: 2px 0 6px rgba(102, 102, 102, 0.35);
  min-height: 100vh;
  // border-right: solid 1px #001529;
}
.menu-sider ::v-deep .el-menu {
  border-right: none;
}
.menu-sider ::v-deep .el-menu-item-group__title {
  display: none;
}
</style>
