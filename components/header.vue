<template>
  <div class="c-wrap">
    <a class="logo">CAMP</a>
    <el-menu class="menu" mode="horizontal" router :default-active="activeIndex" @select="handleSelect" >
      <el-menu-item index="/home" class="menu-item">首页</el-menu-item>
      <el-menu-item index="2" class="menu-item">前沿</el-menu-item>
      <el-menu-item index="3" class="menu-item">Github+</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '/home'
    };
  },
  methods: {
    handleSelect(index) {
    }
  }
};
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
    border-bottom: 0!important;
  }
}
</style>
