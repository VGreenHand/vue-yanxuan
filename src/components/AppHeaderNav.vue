<template>
  <div>
    <ul class="app-header-nav">
      <li class="item" >
        <router-link class="link" :to="'/'">首页</router-link>
      </li>
      <li class="item" v-for="item in list" :key="item.id">
        <router-link class="link" :to="'/category/'+ item.id">{{item.name}}</router-link>
        <!-- 悬停弹窗 -->
        <div class="hover-box">
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
    return { list };
  },
};
</script>
<style lang="less" scoped>
.app-header-nav {
  position: relative;
  .item {
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
    .link {
      font-size: 15px;
      padding-bottom: 9px;
    }
    &:hover {
      .link {
        color: @xtxColor;
        border-bottom: 2px solid @xtxColor;
      }
      .hover-box {
        opacity: 1;
        height: 120px;
      }
    }
  }
  .hover-box {
    position: absolute;
    left: 0;
    top: 42px;
    opacity: 0;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    padding: 10px;
    width: 1100px;
    height: 0px;
    overflow: hidden;
    transition: all .5s;
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