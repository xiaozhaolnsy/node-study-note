<template>
  <div>
    <TopMenuBar/>
    <el-container>
      <el-aside><AsideMenu/></el-aside>
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
