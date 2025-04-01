<template>
  <div>
    <ul class="app-header-nav">
      <li>
        <router-link>首页</router-link>
        <!-- 悬停弹窗 -->
        <div class="hover-box">

        </div>

      </li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
      <li><a href="#">首页</a></li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.app-header-nav {
  li {
    float: left;
    padding: 0 10px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    // 默认选择首页高亮
    .router-link-exact-active {
      color: @xtxColor;
      border-bottom: 2px solid @xtxColor;
    }
    a {
      font-size: 15px;
      padding-bottom: 9px;
      &:hover {
        color: @xtxColor;
        border-bottom: 2px solid @xtxColor;
      }
    }
    // a:hover{
    //         color: @xtxColor;
    //         border-bottom: 2px solid @xtxColor;
    // }
  }
}
</style>