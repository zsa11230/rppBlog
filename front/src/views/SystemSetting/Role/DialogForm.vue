<template>
  <vec-dialog :dialog-show="dialogShow" title="权限" width="500px" @close="hide()">
    <el-form :model="form" ref="form" label-width="100px">
      <el-form-item label="权限名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="标识" prop="identification">
        <el-input v-model="form.identification"></el-input>
      </el-form-item>
      <el-form-item label="权限CODE" prop="value">
        <el-input v-model="form.value"></el-input>
      </el-form-item>
      <el-form-item label="权限信息" prop="info">
        <el-input v-model="form.info"></el-input>
      </el-form-item>
    </el-form>
    <template slot="footer">
      <el-button type="primary" :loading="submitFormLoading" @click="mixinsSubmitFormGen()">保存</el-button>
      <el-button @click="hide()">取消</el-button>
    </template>
  </vec-dialog>
</template>
<script>
import { initForm } from './option'
import formMixins from '@/mixins/formMixins'
export default {
  mixins: [formMixins],
  data () {
    return {
      formRequestFn: () => { },
      dialogShow: false,
      form: initForm(),
    }
  },
  methods: {
    hide () { this.dialogShow = false },
    close () {
      this.form = initForm()
      this.dialogShow = false
      this.$emit('load-page')
    },
    async submitForm () {
      const data = await this.formRequestFn(this.form)
      if (!data.code) {
        this.$message.success('操作成功')
        this.close()
      } else {
        this.$message(data.msg)
      }
    },
  },
}
</script>
