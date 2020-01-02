<template>
  <div class="login-wrapper">
    <el-form class="login-form" :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="submitFormLoading" @click="mixinsSubmitFormGen">登陆</el-button>
        <el-button @click="$openPage('/register')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import formMixins from '@/mixins/formMixins'
export default {
  mixins: [formMixins],
  data () {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 32, message: '长度在 3 到 32 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 32, message: '长度在 3 到 32 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    ...mapActions(['userLogin']),
    async submitForm () {
      const data = await this.userLogin(this.form)
      if (data.code) {
        this.$message(data.msg)
      } else {
        if (this.$route.query.redirect) {
          this.$openPage(this.$route.query.redirect)
        } else {
          this.$openPage('/')
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 500px;
}
</style>