<template>
  <header class="layout-header">
    <div class="global-header-trigger" @click="handleToggle">
      <i :class="siderbar_collapsed?'el-icon-s-unfold':'el-icon-s-fold'"></i>
    </div>
    <el-dropdown class="global-header-trigger">
      <span class="el-dropdown-link">
        {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user" @click.native="handleCenter()">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" @click.native="handleLogout()">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'siderbar_collapsed',
      'username',
    ]),
  },
  methods: {
    ...mapMutations({
      handleToggle: 'SET_SIDERBAR_COLLAPSED',
    }),
    ...mapActions([
      'userLogout',
    ]),
    handleCenter () {
      console.log('center')
    },
    handleLogout () {
      console.log('logout')
      this.userLogout()
      this.$openPage('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
.layout-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  box-shadow: 0 1px 4px rgba(87, 87, 87, 0.08);
}
.global-header-trigger {
  padding: 19px 24px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
    color: $--color-primary;
  }
}
</style>
