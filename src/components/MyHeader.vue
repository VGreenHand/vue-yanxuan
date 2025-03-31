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
            </div>
            <!-- 右侧区域 -->
            <div class="cart">

            </div>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.my-header{
    height: 120px;
    padding: 25px 0 0 0;
    background-color: #fff;
    .header-top{
        display: flex;
        .logo{
            width: 230px;
            height: 60px;
            a{
                display: inline-block;
                width: 100%;
                height: 100%;
                background: url('../assets/images/logo.png') no-repeat 0 0px;
                background-size: 100% 100%;
            }

        }
        .search{
            flex : 1;

        }
        .cart{

        }
    }
}

</style>
