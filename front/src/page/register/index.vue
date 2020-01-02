<template>
  <div class="register-wrapper">
    <el-form class="register-form" :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="form.checkPass" type="password"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="form.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="submitFormLoading" @click="mixinsSubmitFormGen">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
        <el-button @click="$openPage('/login')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import formMixins from '@/mixins/formMixins'
import { postRegister } from '@/api/User'
export default {
  mixins: [formMixins],
  data () {
    var checkAge = (rule, value, callback) => {
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        checkPass: '',
        age: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 32, message: '长度在 3 到 32 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' },
        ],
        age: [
          { validator: checkAge, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    async submitForm () {
      delete this.form.checkPass
      const { data } = await postRegister(this.form)
      if (data.code) {
        this.$message(data.msg)
      } else {
        this.$message.success('恭喜你，注册成功')
        this.$router.push({ path: '/login', query: this.$route.query })
      }
    },
    resetForm () {
      this.$refs['form'].resetFields()
    },
  },
}
</script>
<style lang="scss" scoped>
.register-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-form {
  width: 500px;
}
</style>