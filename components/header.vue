<template>
  <div class="c-wrap">
    <a class="logo">CAMP-FE</a>
    <el-menu class="menu" mode="horizontal" router :default-active="activeIndex" @select="handleSelect">
      <el-menu-item index="/" class="menu-item">首页</el-menu-item>
      <el-menu-item index="/github-plus" class="menu-item">Github+</el-menu-item>
      <el-menu-item index="/explore" class="menu-item">发现</el-menu-item>
    </el-menu>
    <el-input class="search-input" prefix-icon="el-icon-search" v-model="searchKey" placeholder="搜索文章、组件等"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '/',
        searchKey: ''
      }
    },
    methods: {
      handleSelect(index) {
      }
    },
    created() {
      if (this.$route.matched[0]) {
        this.activeIndex = this.$route.matched[0].path || '/'
      }
    }
  }
</script>
<style lang="scss">
  .logo {
    font-size: 24px;
    color: #409eff;
    float: left;
    line-height: 57px;
    font-style: italic;
    font-weight: bold;
    margin-right: 48px;
    vertical-align: middle;
  }

  .menu {
    display: inline-block;
    &-item {
      font-size: 16px;
      padding: 0 24px;
      border-bottom: 0 !important;
    }
  }

  .search-input {
    float: right;
    width: 270px;
    margin-top: 10px;
  }
</style>
