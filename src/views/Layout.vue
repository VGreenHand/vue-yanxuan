<template lang="">
    <div>

    </div>
    <!-- 1.顶部通栏 -->
     <AppTopNav/>

     <!-- 2.头部区域 -->
    <div>头部区域</div>

    <!-- 3.中间内容区域 -->
     <div class="main">
        <!-- 二级路由 -->
        <router-view></router-view>
     </div>

     <!-- 4.底部区域 -->
    <div>底部区域</div>

</template>
<script>
import AppTopNav from '@/components/AppTopNav'
export default {
    components: {
        AppTopNav
    }
}
</script>
<style lang="">

</style>
