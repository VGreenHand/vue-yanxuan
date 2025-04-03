<template>
  <div>
    <ul class="app-header-nav">
      <li class="item">
        <router-link class="link" :to="'/'">首页</router-link>
      </li>
      <li class="item" v-for="item in list" :key="item.id" @mouseenter="show(item)" @mouseleave="hide(item)">
        <router-link class="link" :to="'/category/'+ item.id" @click="hide(item)">
          {{item.name}}</router-link>
        <!-- 悬停弹窗 -->
        <div class="hover-box" :class="{active:item.open}">
          <ul>
            <li><a href="#">
                <img src="@/assets/images/logo.png" alt="">
              </a>
              <div>
                商品名称1
              </div>
            </li>
            <li><a href="#">
                <img src="@/assets/images/logo.png" alt="">
              </a>
              <div>
                商品名称2
              </div>
            </li>
            <li><a href="#">
                <img src="@/assets/images/logo.png" alt="">
              </a>
              <div>
                商品名称3
              </div>
            </li>
            <li><a href="#">
                <img src="@/assets/images/logo.png" alt="">
              </a>
              <div>
                商品名称4
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup(props) {
    const store = useStore();
    //仓库读取默认分类列表
    const list = computed(() => {
      return store.state.category.cateList;
    });
    const show = (item) => {
      item.open = true;
    };
    const hide = (item) => {
      item.open = false;
    };
    return { list, show, hide };
  },
};
</script>
<style lang="less" scoped>
.app-header-nav {
  position: relative;
  .item {
    // position: relative;
    // clear: both;
    float: left;
    padding: 0 15px 0px;
    font-weight: bold;
    height: 35px;
    line-height: 35px;
    // 默认选择首页高亮
    .router-link-exact-active {
      color: @xtxColor;
      border-bottom: 2px solid @xtxColor;
    }
    .link {
      font-size: 15px;
      padding-bottom: 5px;
      // display: block; // 确保链接填充父元素
    }
    &:hover {
      .link {
        color: @xtxColor;
        border-bottom: 2px solid @xtxColor;
      }
      .hover-box {
        opacity: 0;
        visibility: hidden;
        height: 132px; // 原高度120px + 上下padding 12px
        pointer-events: none; // 禁用交互
      }
      .active {
        pointer-events: auto; // 启用交互
        visibility: visible; // 确保激活时可见
        opacity: 1; // 确保激活时可见
      }
    }
  }
  .hover-box {
    position: absolute;
    top: 42px;
    left: -26%; // 居中定位
    transform: translateX(25%);
    opacity: 0;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    padding: 10px;
    width: 1100px;
    height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 999; // 确保层级高于内容区域
    visibility: hidden;
    // pointer-events: none; // 禁用交互

    ul {
      display: flex;
      li {
        height: 100px;
        width: 110px;
        text-align: center;
        a {
          border-bottom: 0;
        }
        img {
          width: 50px;
          height: 50px;
          text-align: center;
        }
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>