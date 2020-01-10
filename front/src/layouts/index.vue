<template>
  <el-container>
    <vec-aside></vec-aside>
    <section class="container">
      <vec-header></vec-header>
      <el-main>
        <router-view />
      </el-main>
      <vec-footer></vec-footer>
    </section>
  </el-container>
</template>
<script>

import VecHeader from './Components/Header/index'
import VecFooter from './Components/Footer/index'
export default {
  components: {
    VecHeader,
    VecFooter,
  },
}
</script>

<style lang="scss" scoped>

.container {
  background-color: #eee;
  width: 100%;
}
.container ::v-deep {
  .el-main {
    margin: 20px;
    background-color: #fff;
  }
}
</style>
