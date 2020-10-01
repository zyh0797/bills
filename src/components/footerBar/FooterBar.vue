<template>
    <div id="footerBar" class="footerBar">
        <router-link class="item" to="/home" :class="{active: isCurrent('/home')}" >
            <i class="iconfont iconzhangben"></i>
            <span>首页</span>
        </router-link>
        <router-link class="item" to="/chart" :class="{active: isCurrent('/chart')}" >
            <i class="iconfont icontubiao"></i>
            <span>统计</span>
        </router-link>
        <router-link class="item" to="/mine" :class="{active: isCurrent('/mine')}">
            <i class="iconfont iconwo"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
    export default{
        methods:{
            isCurrent(path) {
                return this.$route.path === path
            }
        }
    }
</script>
<style>
    .footerBar {
        display: flex;
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 0;
        background-color: #56e0c4;
    }
    .footerBar .item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        font-size: 12px;
    }
    .footerBar .item .iconfont {
        margin-bottom: 4px;
        font-size: 30px;
    }
    .footerBar .active{
        color: #4367e8;
    }
</style>