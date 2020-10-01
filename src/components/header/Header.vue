<template>
    <div class="header_bar">
        <div class="side_icon">
            <slot name="left-slot"></slot>
        </div>
        <div class="center_title">
            <slot name="center-slot"></slot>
        </div>
        <div class="side_icon">
            <slot name="right-slot"></slot>
        </div>
    </div>
</template>
<script>
    export default{}
</script>
<style scoped>
    .header_bar {
        height: 45px;
        width: 100%;
        line-height: 45px;
        position: fixed;
        top: 0px;
        left: 0px;
        color: #fff;
        text-align: center;
        background-color: #5261ef;
    }
    .header_bar .side_icon {
        width: 50px;
        height: 45px;
        float: left;
    }
    .header_bar .side_icon .iconfont {
        font-size: 25px;
    }
    .header_bar .center_title {
        width: calc(100% - 100px);
        height: 45px;
        float: left;
        font-size: 16px;
        font-weight: bold;
    }
</style>