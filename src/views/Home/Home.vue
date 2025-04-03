<template>
  <div class="home w">
    <HomeBanner />
    <AppBanner />
  </div>
</template>
<script>
import AppBanner from "@/components/library/AppBanner.vue";
import HomeBanner from "./HomeBanner.vue";
export default {
  components: {
    HomeBanner,
    AppBanner
  },
};
</script>
<style lang="less" scoped>
</style>