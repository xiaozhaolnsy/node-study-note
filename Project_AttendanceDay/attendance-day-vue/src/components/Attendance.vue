<template>
  <el-container
    direction="vertical"
    style="width:50%;height:500px;margin-top:0%;border: 1px solid #ffffff;margin-left:10%;"
  >
    <h3>请打卡</h3>
    <el-divider></el-divider>
    <el-table
      :data="datalist"
      style="width: 100%">
      <el-table-column
        prop="time"
        label="时间"
        width="300">
      </el-table-column>
    </el-table>
    <el-divider></el-divider>
    <el-form>
      <el-form-item>
        <el-button @click="submit">打卡</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      uid: 123,
      datalist: []
    }
  },
  methods: {
    submit () {
      this.$http({
        url: this.$http.adornUrl(`/att`),
        method: 'post',
        data: { u: `${this.uid}` }
      }).then(({ data }) => {
        if (data) {
          alert('打卡成功')
          this.getAtt()
        } else {
          alert('打卡失败')
        }
      }
      )
    },
    getUid () {
      // this.uid = this.$router.params.uid
      this.uid = localStorage.getItem('uid')
    },
    getAtt () {
      this.$http({
        url: this.$http.adornUrl(`/att`),
        method: 'get',
        params: { u: `${this.uid}` }
      }).then(({ data }) => {
        if (data) {
          console.log(data.list)
          this.datalist = data.list
        }
      }
      )
    }
  },
  created () {
    this.getUid()
    this.getAtt()
  }
}
</script>
