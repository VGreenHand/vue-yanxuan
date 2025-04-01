<template>
  <div class="my-header w">
    <!-- 上区域 -->
    <div class="header-top">
      <!-- 左侧区域 -->
      <h1 class="logo">
        <router-link to="/"></router-link>
      </h1>
      <!-- 中间内容区域 -->
      <div class="search">
        <div class="center-search">
          <input type="text" placeholder="搜索商品,共223个好物" class="search-input" />
          <button class="search-btn">搜索</button>
        </div>
        <!-- 搜索区域下的小导航 -->
        <ul class="search-nav">
          <li><a href="#">美食</a></li>
          <li><a href="#">餐厨</a></li>
          <li><a href="#">艺术</a></li>
          <li><a href="#">电器</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">洗护</a></li>
          <li><a href="#">育婴</a></li>
        </ul>
      </div>
      <!-- 右侧区域 -->
      <div class="cart">
        <a href="#">
          <i class="iconfont icon-gouwuchekong"></i>
          购物车
          <em>2</em>
        </a>
      </div>
    </div>
    <!-- 下区域 二级导航-->
    <AppHeaderNav />
  </div>
</template>
<script>
import AppHeaderNav from "./AppHeaderNav.vue";
import { useStore } from "vuex";
export default {
  components: {
    AppHeaderNav,
  },
  setup(props) {
    const store = useStore();
    // 触发action
    store.dispatch("category/getAllCategory");
  },
};
</script>
<style lang="less" scoped>
.my-header {
  height: 120px;
  padding: 25px 0 0 0;
  background-color: #fff;
  .header-top {
    display: flex;
    .logo {
      width: 330px;
      height: 60px;
      a {
        display: inline-block;
        width: 100%;
        height: 60px;
        background: url("../assets/images/sprite.png") no-repeat 0 -75px;
        background-size: 330px 600px;
      }
    }
    .search {
      flex: 1;
      .center-search {
        width: 540px;
        height: 35px;
        input {
          width: 440px;
          height: 35px;
          border-radius: 20px 0 0 20px;
          padding-left: 15px;
          border: 1px solid @xtxColor;
          box-sizing: border-box;
        }
        .search-btn {
          float: right;
          height: 35px;
          width: 100px;
          border: 0;
          border-radius: 0 20px 20px 0;
          background-color: @xtxColor;
          padding-right: 15px;
          border: 1px solid @xtxColor;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
      }
      .search-nav {
        width: 540px;
        li {
          float: left;
          height: 32px;
          padding: 8px 0;
          a {
            &:hover {
              color: @xtxColor;
            }
            padding: 0 10px;
            border-right: 1px solid #ccc;
            font-size: 12px;
            // color: #ccc;
          }
        }
        li:last-child a {
          border-right: 0;
        }
      }
    }
  }
  .cart {
    width: 150px;
    height: 35px;
    line-height: 35px;
    border-radius: 20px;
    border: 1px solid @xtxColor;
    font-size: 16px;
    text-align: center;
    em {
      display: inline-block;
      width: 18px;
      height: 18px;
      line-height: 18px;
      background-color: #f00;
      color: #fff;
      border-radius: 50%;
      margin-left: 5px;
    }
  }
}
</style>
