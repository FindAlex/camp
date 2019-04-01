<template>
  <!--<div>-->
  <!--<nuxt />-->
  <!--</div>-->
  <el-container>
    <el-header class="header" height="61px">
      <Header/>
    </el-header>
    <el-container class="c-wrap">
      <el-aside>aside</el-aside>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
    <el-footer>
      <div class="c-wrap">footer</div>
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../components/header'
export default {
  components:{
    Header
  }
}
</script>

<style class="lang">
.header{
  background-color: #fff;
  border: solid 1px #e6e6e6;
}
</style>
