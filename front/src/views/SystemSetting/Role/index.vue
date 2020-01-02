<template>
  <div>
    <el-button type="primary" @click="handleAdd()">新增</el-button>
    <el-table :data="roleList" style="width: 100%">
      <el-table-column prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="name" label="权限名称" width="180">
      </el-table-column>
      <el-table-column prop="identification" label="标识" width="180">
      </el-table-column>
      <el-table-column prop="value" label="权限CODE" width="180">
      </el-table-column>
      <el-table-column prop="info" label="权限信息" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text">编辑</el-button>
          <el-button @click="handleDel(scope.row)" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <dialog-form ref="DialogForm" @load-page="loadPage()"></dialog-form>
  </div>
</template>
<script>
import DialogForm from './DialogForm'
import {
  getRoleList,
  postRole,
  patchRole,
  getRoleById,
  deleteRoleById,
} from '@/api/Role'
export default {
  components: {
    DialogForm,
  },
  data () {
    return {
      roleList: [],
    }
  },
  created () {
    this.loadPage()
  },
  methods: {
    async loadPage () {
      const data = await getRoleList()
      this.roleList = data.data
    },
    handleAdd () {
      this.$refs['DialogForm'].formRequestFn = postRole
      this.$refs['DialogForm'].dialogShow = true
    },
    async handleEdit (row) {
      const { data } = await getRoleById(row.id)
      this.$refs['DialogForm'].form = { ...data }
      this.$refs['DialogForm'].formRequestFn = patchRole
      this.$refs['DialogForm'].dialogShow = true
    },
    async handleDel (row) {
      const data = await deleteRoleById(row.id)
      console.log(data)
      if (!data.code) {
        this.$message('操作成功')
        this.loadPage()
      } else {
        this.$message.warn(data.msg)
      }
    },
  },
}
</script>
