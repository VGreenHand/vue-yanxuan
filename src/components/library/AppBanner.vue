<template>
  <el-carousel height="500px">
    <el-carousel-item v-for="(item,index) in list" :key="item.index">
      <img src="" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  props: {
    name: "AppBanner",
    list: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style lang="less" scoped>
</style>