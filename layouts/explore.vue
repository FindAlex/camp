<template>
  <el-container class="container">
    <el-header class="header" height="61px">
      <Header/>
    </el-header>
    <el-container class="c-wrap body">
      <el-main class="main">
        <nuxt/>
      </el-main>
      <el-aside class="aside">explore-aside</el-aside>
    </el-container>
    <el-footer>
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>
  .header {
    background-color: #fff;
    border: solid 1px #e6e6e6;
    margin-bottom: 32px;
  }

  .body {
    min-height: 600px;
  }

  .aside {
    margin-left: 20px;
  }
</style>
