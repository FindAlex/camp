<template>
  <div class="c-card">
    <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item in tabs"  :name="item.name">
        {{activeName===item.name?item.labelFull:item.label}}
      </el-tab-pane>
    </el-tabs>
  </div>
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
            name:'focus',
            label:'关注',
            labelFull:'关注动态'
          },
          {
            name:'hot',
            label:'热门',
            labelFull:'热门榜单'
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
  .tab {
    padding: 8px 16px
  }
</style>
