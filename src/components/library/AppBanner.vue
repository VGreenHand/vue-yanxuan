<template>
  <el-carousel height="500px">
    <el-carousel-item v-for="item in list" :key="item.id">
      <img :src="item.imgUrl" alt="">
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