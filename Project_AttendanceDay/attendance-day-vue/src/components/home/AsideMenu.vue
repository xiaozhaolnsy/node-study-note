<template>
  <el-row class="tac">
  <el-col :span="16">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @select="navSelect"
      background-color="#ffffff"
      text-color="#000000"
      active-text-color="#1f9aff" >
      <el-menu-item index='2' disabled>登录</el-menu-item>
      <el-menu-item index='3'>打卡</el-menu-item>
      <el-menu-item index='4'>个人信息</el-menu-item>
      <el-menu-item index='5'>出勤统计</el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      active: '2'
    }
  },
  methods: {
    navSelect (key) {
      switch (key) {
        // case '2': this.$router.push({name: 'Home'}); this.active = '2'; break
        case '3':this.$router.push({path: '/attendance'}); this.active = '3'; break
        case '4':this.$router.push({path: '/basicinfo'}); this.active = '4'; break
        case '5':this.$router.push({path: '/statistics'}); this.active = '4'; break
      }
    }
  }
}
</script>
