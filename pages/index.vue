<template>
  <div>
    <el-carousel indicator-position="outside" :interval="5000" class="banner" trigger="click">
      <el-carousel-item class="banner-item" v-for="(item,index) in bannerItems" :key="index">
        <a href=""> <img :src="item.img"/></a>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        bannerItems: [
          {img: '/temp/banner-1.jpg'},
          {img: '/temp/banner-2.jpg'}
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .banner-item {
    background-color: #eee;
  }
</style>
<style>
  .banner .el-carousel__button {
    background-color: #999;
  }
</style>
