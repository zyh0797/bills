<template>
    <div class="item">
        <Header>
            <span slot="left-slot" @click="back">
                <i class="iconfont iconarrow-lift"></i>
            </span>
            <span slot="center-slot">记录</span>
        </Header>
        <div class="container">
            <div class="month_box">
                <label class="label_box">9月</label>
                <div class="item_box frist" @click="goDetail">
                    <div class="left_icon">
                        <i class="iconfont iconcanyin"></i>
                    </div>
                    <div class="center_text">
                        <div class="text_content up">餐饮</div>
                        <div class="text_content down">09-19 | 一个包子</div>
                    </div>
                    <div class="right_num">-3.50</div>
                </div>
                <div class="item_box">
                    <div class="left_icon">
                        <span><i class="iconfont iconjiaotong1"></i></span>
                    </div>
                    <div class="center_text">
                        <div class="text_content up">交通</div>
                        <div class="text_content down">09-19 | </div>
                    </div>
                    <div class="right_num">-11.40</div>
                </div>
                <div class="item_box">
                    <div class="left_icon">
                        <span><i class="iconfont icongouwu"></i></span>
                    </div>
                    <div class="center_text">
                        <div class="text_content up">购物</div>
                        <div class="text_content down">09-21 | 手机膜</div>
                    </div>
                    <div class="right_num">-10.03</div>
                </div>
            </div>
            <div class="month_box">
                <label class="label_box">9月</label>
                <div class="item_box frist">
                    <div class="left_icon">
                        <span><i class="iconfont iconlvyou"></i></span>
                    </div>
                    <div class="center_text">
                        <div class="text_content up">旅游</div>
                        <div class="text_content down">09-19 | there are some remarks</div>
                    </div>
                    <div class="right_num">-105.65</div>
                </div>
                <div class="item_box">
                    <div class="left_icon">
                        <span><i class="iconfont iconzhufangguihua"></i></span>
                    </div>
                    <div class="center_text">
                        <div class="text_content up">房屋</div>
                        <div class="text_content down">09-20 | 房租</div>
                    </div>
                    <div class="right_num">-1000.00</div>
                </div>
                <div class="item_box">
                    <div class="left_icon">
                        <span><i class="iconfont iconlingshi"></i></span>
                    </div>
                    <div class="center_text">
                        <div class="text_content up">零食</div>
                        <div class="text_content down">09-21 | </div>
                    </div>
                    <div class="right_num">-10.03</div>
                </div>
            </div>
        </div>
        <div class="footerBtn" @click="goEdit">记一笔</div>
    </div>
</template>
<script>
    import Header from '../../components/header/Header'
    export default{
        methods:{
            back(){
                this.$router.back(-1);
            },
            goDetail(){
                this.$router.push('/detail');
            },
            goEdit(){
                this.$router.push('/edit');
            }
        },
        components:{Header}
    }
</script>
<style scoped>
    .item {
        width: 100%;
        height: 100%;
    }
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 45px;
        left: 0;
    }
    .label_box {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
        font-size: 12px;
        color: #989898;
    }
    .item_box {
        width: 96%;
        height: 50px;
        background-color: #fff;
        margin: 0 auto;
        margin-top: 5px;
    }
    .frist{
        margin-top: 0;
    }
    .item_box .left_icon {
        width: 50px;
        height: 50px;
        float: left;
        line-height: 50px;
        text-align: center;
    }
    .item_box .left_icon i {
        font-size: 25px;
    }
    .item_box .left_icon .iconcanyin{
        color: green;
    }
    .item_box .left_icon .iconjiaotong1{
        color: rgb(24, 208, 214);
    }
    .item_box .left_icon .icongouwu{
        color: rgb(241, 61, 15);
    }
    .item_box .left_icon .iconlvyou{
        color: rgb(243, 221, 26);
    }
    .item_box .left_icon .iconzhufangguihua{
        color: rgb(65, 33, 247);
    }
    .item_box .left_icon .iconlingshi{
        color: hotpink;
    }
    .item_box .center_text {
        width: calc(100% - 150px);
        height: 50px;
        float: left;
    }
    .item_box .center_text .text_content {
        width: 100%;
        height: 25px;
        padding-left: 5px;
        line-height: 25px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item_box .center_text .up {
        color: #000;
        font-size: 14px;
    }
    .item_box .center_text .down {
        color: #898989;
        font-size: 12px;
    }
    .item_box .right_num {
        width: 100px;
        height: 50px;
        line-height: 50px;
        float: left;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
    }
    .footerBtn {
        width: 100%;
        height: 45px;
        background-color: #52f032;
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 18px;
    }
</style>