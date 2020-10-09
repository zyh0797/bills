<template>
    <div class="detail">
        <Header>
            <span slot="left-slot" @click="back">
                <i class="iconfont iconarrow-lift"></i>
            </span>
            <span slot="center-slot">详情</span>
            <span slot="right-slot" @click="deleteIt">
                <i class="iconfont iconashbin"></i>
            </span>
        </Header>
        <div class="container">
            <div class="type_info">
                <div class="icon_box">
                    <i class="iconfont iconcanyin"></i>
                </div>
                <div class="type">餐饮消费</div>
                <div class="number">-22.00</div>
                <hr class="splice">
                <div class="info_box">
                    <div class="info_item">
                        <label>记录时间</label>
                        <span>2020-09-20 15:25:36</span>
                    </div>
                    <div class="info_item">
                        <label>消费时间</label>
                        <span>2020-09-19 15:25:36</span>
                    </div>
                    <div class="info_item">
                        <label>支付方式</label>
                        <span>微信</span>
                    </div>
                    <div class="info_item">
                        <label>备注</label>
                        <span>{{remark}}</span>
                    </div>
                </div>
            </div>
            <div class="btn_box" @click="edit">修改信息</div>
        </div>
    </div>
</template>
<script>
    import Header from '../../components/header/Header'
    export default{
        data(){
            return {
                remark:'没有备注啊'
            }
        },
        methods:{
            back(){
                this.$router.back(-1)
            },
            edit(){
                this.$router.push({path:'/edit',query:{op:1}});
            },
            deleteIt(){
                console.log('delete')
            }
        },
        components:{Header}
    }
</script>
<style scoped>
    .detail {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #ececec;
    }
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 45px;
        left: 0;
    }
    .type_info {
        width: 100%;
        height: auto;
        background-color: #fff;
        padding: 10px 0 5px 0;
        text-align: center;
    }
    .type_info .icon_box {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        text-align: center;
        line-height: 50px;
    }
    .type_info .icon_box i {
        font-size: 50px;
    }
    .type_info .icon_box .iconcanyin{
        color: green;
    }
    .type_info .icon_box .iconjiaotong1{
        color: rgb(24, 208, 214);
    }
    .type_info .icon_box .icongouwu{
        color: rgb(241, 61, 15);
    }
    .type_info .icon_box .iconlvyou{
        color: rgb(243, 221, 26);
    }
    .type_info .icon_box .iconzhufangguihua{
        color: rgb(65, 33, 247);
    }
    .type_info .icon_box .iconlingshi{
        color: hotpink;
    }
    .type_info .type {
        width: 100%;
        height: 20px;
        line-height: 20px;
        color: #000;
        font-weight: bolder;
        font-size: 14px;
    }
    .type_info .number {
        width: 100%;
        height: 25px;
        line-height: 25px;
        color: #000;
        font-weight: bolder;
        font-size: 16px;
    }
    .splice {
        width: 90%;
        margin: 2px auto;
        border: none;
        border-top: 1px dotted #185598;
    }
    .info_box {
        width: 90%;
        height: auto;
        margin: 5px auto;
        text-align: left;
    }
    .info_item {
        width: 100%;
        height: 25px;
        line-height: 25px;
        font-size: 10px;
    }
    .info_item label {
        display: inline-block;
        color: #635c5c;
        width: 70px;
        text-align: left;
    }
    .info_item span {
        color: #000;
    }
    .btn_box {
        width: 100%;
        height: 40px;
        background-color: #fff;
        line-height: 40px;
        margin-top: 5px;
        text-align: center;
        font-weight: bolder;
        font-size: 15px;
        color: red;
    }
</style>