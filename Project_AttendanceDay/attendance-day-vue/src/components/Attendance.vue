<template>
  <el-container
    direction="vertical"
    style="width:20%;height:500px;margin-top:0%;border: 1px solid #ffffff;margin-left:30%;"
  >
    <h3>请打卡</h3>
    <el-divider></el-divider>
    <el-form :model="f" :rules="rules" ref="f">
      <el-form-item>
        <el-button :disabled="f.v" type="primary" @click="submit()">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      f: {
        u: '', // username
        p: '', // password
        v: true
      },
      rules: {
        u: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        p: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },

  methods: {
    submit () {
      this.$http({
        url: this.$http.adornUrl(`/usr`),
        method: 'post',
        data: { u: `${this.f.u}`, p: `${this.f.p}` }
      }).then(({ data }) => {
        if (data) {
          localStorage.setItem(`userid`, data)
          // localStorage.setItem(`usertoken`, data.token)
          alert('登录成功')
          this.$router.push({ path: '/' })
          this.$router.go(0)
        } else {
          alert('登录错误')
        }
      }
      )
    }
  }
}
</script>
