<template>
  <div class="c-wrap">
    <a class="logo">CAMP</a>
    <el-menu class="menu" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
      <el-menu-item index="1" class="menu-item" :route="'/home'">首页</el-menu-item>
      <el-menu-item index="2" class="menu-item">前沿</el-menu-item>
      <el-menu-item index="3" class="menu-item">Github+</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '0'
    };
  },
  methods: {
    handleSelect(index, indexPath) {
      console.log(index);
      console.log(indexPath);
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
  }
}
</style>