<template>
    <div class="mine">
        <div class="header">
            <div class="head_box">
                <img src="../../assets/images/1.jpg" alt="">
            </div>
            <div class="name_box">
                <span>- 莫羽 -</span>
            </div>
            <div class="more_box">
                <a href="#">待办</a>
                |
                <a href="#">通知</a>
            </div>
        </div>
        <div class="label_box">
            <div class="title_box">
                <span>更换头像</span>
            </div>
            <div class="title_box">
                <span>修改昵称</span>
            </div>
            <div class="title_box">
                <span>系统设置</span>
            </div>
            <div class="title_box">
                <span>问题反馈</span>
            </div>
        </div>
        <div class="label_box">
            <div class="title_box last">
                <span>退出登录</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{}
</script>
<style scoped>
    .mine {
        width: 100%;
        height: 100%;
    }
    .header {
        width: 100%;
        height: auto;
        font-size: 14px;
        background-color: #fff;
    }
    .header .head_box{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header .head_box img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #d2d2d2;
    }
    .header .name_box {
        width: 100%;
        height: 20px;
        margin-top: -12px;
        line-height: 20px;
        text-align: center;
    }
    .header .more_box {
        width: 100%;
        height: 35px;
        line-height: 35px;
        display: flex;
    }
    .header .more_box a {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
    }
    .label_box{
        width: 100%;
        height: auto;
        margin-top: 5px;
    }
    .label_box .title_box {
        width: 100%;
        height: 45px;
        background-color: #fff;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
        color: #000;
    }
    .label_box .last {
        color: red;
    }
</style>