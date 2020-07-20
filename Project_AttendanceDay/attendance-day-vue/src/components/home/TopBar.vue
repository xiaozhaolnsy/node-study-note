<template>
  <div>
    <el-menu
      background-color="#ffffff"
      text-color="#6abcff"
      active-text-color="#1f9aff"
      :default-active="active"
      mode="horizontal"
    >
    <!-- @select="navSelect" -->
        <div style="font-size:40px; color:#6abcff; height:80px;">
          AttendanceDay 出勤日
        </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: '0'
    }
  }
  // methods: {
  //   navSelect (key) {
  //     switch (key) {
  //       case '2': this.$router.push({name:'Home'});this.active = '2'; break;
  //       case '3':this.$router.push({name:'Auto'});this.active = '3'; break;
  //       case '4':this.$router.push({name:'News',params: {kind: 0}}); this.active = '4';break;
  //       case '5':this.$router.push({name:'News',params: {kind: 1}}); this.active = '5';break;
  //       case '6':this.$router.push({name:'News',params: {kind: 2}}); this.active = '6';break;
  //       case '8':this.$router.push({name:'Logout'}); this.active = '8'; break;
  //       case '9':this.$router.push({name:'Login'}); this.active = '9'; break;
  //     }
  //   },
  //   getLocalStorage(){
  //     this.u=localStorage.getItem(`username`)
  //   },
  //   getActive(){
  //     this.active = this.$router.params.active;
  //   }
  // },
  // created(){
  //   this.getLocalStorage()
  // }
}
</script>
