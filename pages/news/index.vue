<template>
  <el-tabs class="c-card" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in tabs" :label="activeName===item.name?item.labelFull:item.label"  :name="item.name">
    </el-tab-pane>
  </el-tabs>
</template>

<script>

  export default {
    components: {},

    data() {
      return {
        tabs:[
          {
            name:'new',
            label:'最新',
            labelFull:'最新内容'
          },
          {
            name:'hot',
            label:'热门',
            labelFull:'热门新闻'
          }
        ],
        activeName: 'new'
      }
    },
    methods: {
      handleClick() {
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
