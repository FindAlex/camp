<template>
  <el-tabs class="c-card" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      v-for="item in tabs"
      :label="activeName===item.name?item.labelFull:item.label"
      :name="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  layout: "github-plus",
  components: {},
  head() {
    return {
      title: "111",
      meta: [
        { hid: "description", name: "description", content: "123" },
        { hid: "keyword", name: "keyword", content: "1231" }
      ]
    };
  },
  data() {
    return {
      tabs: [
        {
          name: "new",
          label: "推荐",
          labelFull: "首页推荐"
        },
        {
          name: "focus",
          label: "关注",
          labelFull: "关注动态"
        },
        {
          name: "hot",
          label: "热门",
          labelFull: "近期热门"
        }
      ],
      activeName: "new"
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style lang="scss" scoped>
body{
  background-color: #333;
}
</style>
