<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="title" label="日期" width="180"></el-table-column>
      <el-table-column prop="text" label="姓名" width="180"></el-table-column>
      <el-table-column prop="createTime" label="地址"></el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout='total, sizes, prev, pager, next, jumper'
      :total="count"
    ></el-pagination>

  </div>
</template>

<script>
import formMixins from '@/mixins/formMixins'
import { getInfoPage } from '@/api/Info'

export default {
  mixins: [formMixins],
  data() {
    return {
      tableData: [],
      count: 0,
      size: 10,
      current: 0,
    }
  },
  created() {
    this.loadPage()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    async loadPage() {
      const data = await getInfoPage({
        current: 0,
        size: 10,
      })
      this.tableData = data.data.records
      this.count = data.data.total
      this.size = data.data.size
    },
  },
}
</script>