<template>
  <el-container>
    <vec-aside></vec-aside>
    <section class="container" :style="`width: ${containerWidth}`">
      <vec-header></vec-header>
      <el-main>
        <router-view />
      </el-main>
      <vec-footer></vec-footer>
    </section>
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
import VecAside from './Components/Aside/index'
import VecHeader from './Components/Header/index'
import VecFooter from './Components/Footer/index'
export default {
  components: {
    VecAside,
    VecHeader,
    VecFooter,
  },
  computed: {
    ...mapGetters(['siderbar_collapsed']),
    containerWidth () {
      return this.siderbar_collapsed ? 'calc(100vw - 64px)' : 'calc(100vw - 200px)'
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #eee;
}
.container ::v-deep {
  .el-main {
    margin: 20px;
    background-color: #fff;
  }
}
</style>
