<template>
  <div>
    <TopBar/>
    <el-container>
      <el-aside width=25%><AsideMenu/></el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>

<script>

import TopBar from '@/components/home/TopBar'
import AsideMenu from '@/components/home/AsideMenu'
import Footer from '@/components/home/Footer'

export default {
  components: {
    TopBar,
    AsideMenu,
    Footer
  }
}
</script>
