<template>
  <el-table :data="userList" style="width: 100%">
    <el-table-column prop="id" label="ID">
    </el-table-column>
    <el-table-column prop="username" label="用户名" width="180">
    </el-table-column>
    <el-table-column prop="password" label="密码" width="180">
    </el-table-column>
    <el-table-column prop="age" label="年龄" width="180">
    </el-table-column>
  </el-table>
</template>
<script>
import { getUserList } from '@/api/User'
export default {
  data () {
    return {
      userList: [],
    }
  },
  created () {
    this.loadPage()
  },
  methods: {
    async loadPage () {
      const data = await getUserList()
      this.userList = data.data
    },
  },
}
</script>
