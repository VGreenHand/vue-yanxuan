<template>
  <div>
    <ul class="app-header-nav">
      <li v-for="item in list" :key="item.id">
        <router-link>{{item.name}}</router-link>
        <!-- 悬停弹窗 -->
        <div class="hover-box">
          <ul>
            <li><a href="#">
                <img src="@/assets/images/logo.png" alt="">
                <div>
                  商品名称
                </div>
              </a>
            </li>
            <li><a href="#">
                <img src="@/assets/images/logo.png" alt="">
                <div>
                  商品名称
                </div>
              </a>
            </li>
            <li><a href="#">
                <img src="@/assets/images/logo.png" alt="">
                <div>
                  商品名称
                </div>
              </a>
            </li>
            <li><a href="#">
                <img src="@/assets/images/logo.png" alt="">
                <div>
                  商品名称
                </div>
              </a>
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
  li {
    position: relative;
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
  .hover-box {
    position: absolute;
    left: 0;
    top: 40px;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    padding: 10px;
    width: 1100px;
    height: 120px;
    ul {
      li {
        height: 100px;
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