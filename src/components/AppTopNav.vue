<template>
    <div class="app-top-nav">
        <div class="w">
            <ul>
                <template v-if = "userInfo?.token">
                    <li>
                      <a href="js:;">张三</a>
                    </li>
                    <li>
                      <a href="js:;">退出登录</a>
                    </li>
                </template>
                <li v-else>
                    <a href="js:;">登录/注册</a>
                </li>
                <li>
                    <a href="js:;">我的订单</a>
                </li>
                <li>
                    <a href="js:;">甄选家</a>
                </li>
                <li>
                    <a href="js:;">企业采购</a>
                </li>
                <li>
                    <a href="js:;">客户服务</a>
                </li>
                <li>
                    <a href="js:;">
                        <i class="iconfont icon-shouji"></i>APP</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup(props) {
    const store = useStore();
    let userInfo = computed(() => {
      return store.state.user.userInfo;
    });
    console.log("userinfo in setup:", userInfo.value);
    return { userInfo };
  },
};
</script>
<style lang="less" scoped>
.app-top-nav {
  background-color: #333;
  width: 100%;
  ul {
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: flex-end;
    li {
      a {
        font-size: 12px;
        padding: 0 10px;
        color: #ccc;
        border-left: 1px solid #ccc;
        &:hover {
          color: @xtxColor;
        }
      }
    }
    li:nth-child(1) {
      a {
        border-left: 0px;
      }
    }
  }
}
</style>