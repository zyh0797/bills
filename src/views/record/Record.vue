<template>
    <div class="record">
        <Header>
            <span slot="left-slot" @click="back">
                <i class="iconfont iconarrow-lift"></i>
            </span>
            <span slot="center-slot">记录</span>
        </Header>
        <div class="container">
            <div class="month_box" v-for="arr in list" :key="arr.month">
                <label class="label_box">{{arr.month}}月</label>
                <div class="item_box" @click="goDetail" v-for="item in arr.daily" :key="item.id">
                    <div class="left_icon">
                        <i :class="setClass(item.iconClass)"></i>
                    </div>
                    <div class="center_text">
                        <div class="text_content up">{{item.name}}</div>
                        <div class="text_content down">{{item.time}} | {{item.remark}}</div>
                    </div>
                    <div class="right_num">
                        <span v-if="isSub(item.isIncome)">-</span><span v-if="!isSub(item.isIncome)">+</span>{{item.number}}
                    </div>
                </div>
            </div>
        </div>
        <div class="footerBtn" @click="goEdit">记一笔</div>
    </div>
</template>
<script>
    import Header from '../../components/header/Header'
    export default{
        data(){
            return{
                list:[
                    {
                        month:9,
                        daily:[
                            {id:0,type:0,isIncome:1,time:'2020-09-30',remark:'减',number:3.5},
                            {id:1,type:1,isIncome:1,time:'2020-09-30',remark:'减',number:3.5},
                            {id:2,type:2,isIncome:1,time:'2020-09-30',remark:'减',number:3.5},
                            {id:3,type:3,isIncome:1,time:'2020-09-30',remark:'减',number:3.5},
                            {id:4,type:4,isIncome:1,time:'2020-09-30',remark:'减',number:3.5},
                            {id:5,type:5,isIncome:1,time:'2020-09-30',remark:'减',number:3.5},
                            {id:6,type:6,isIncome:1,time:'2020-09-30',remark:'减',number:3.5},
                            {id:7,type:0,isIncome:0,time:'2020-09-30',remark:'加',number:3.5},
                            {id:8,type:1,isIncome:0,time:'2020-09-30',remark:'加',number:3.5},
                            {id:9,type:2,isIncome:0,time:'2020-09-30',remark:'加',number:3.5},
                            {id:10,type:3,isIncome:0,time:'2020-09-30',remark:'加',number:3.5}
                        ]
                    },
                    {
                        month:10,
                        daily:[
                            {id:0,type:0,isIncome:1,time:'2020-09-30',remark:'一个包子',number:3.5},
                            {id:1,type:1,isIncome:1,time:'2020-09-30',remark:'',number:3.5},
                            {id:2,type:2,isIncome:1,time:'2020-09-30',remark:'',number:3.5},
                            {id:3,type:3,isIncome:1,time:'2020-09-30',remark:'',number:3.5},
                            {id:4,type:4,isIncome:1,time:'2020-09-30',remark:'',number:3.5},
                            {id:5,type:5,isIncome:1,time:'2020-09-30',remark:'',number:3.5},
                            {id:6,type:6,isIncome:1,time:'2020-09-30',remark:'',number:3.5},
                            {id:7,type:0,isIncome:0,time:'2020-09-30',remark:'一个包子',number:3.5},
                            {id:8,type:1,isIncome:0,time:'2020-09-30',remark:'一个包子',number:3.5},
                            {id:9,type:2,isIncome:0,time:'2020-09-30',remark:'一个包子',number:3.5},
                            {id:10,type:3,isIncome:0,time:'2020-09-30',remark:'一个包子',number:3.5}
                        ]
                    }
                ]
            }
        },
        methods:{
            back(){
                this.$router.back(-1);
            },
            goDetail(){
                this.$router.push('/detail');
            },
            setClass(str){
                let obj = {iconfont:true};
                obj[str] = true;
                return obj;
            },
            goEdit(){
                this.$router.push('/edit');
            },
            isSub(val){
                return val == 1
            }
        },
        components:{Header},
        beforeMount (){
            if(this.list != '' || this.list != null){
                for(let i = 0; i < this.list.length; i++){
                    let obj = this.list[i].daily;
                    for(let j = 0; j < obj.length; j++){
                        //{id:0,type:0,isIncome:1,time:'2020-09-30',remark:'一个包子',number:3.5},
                        let item = obj[j];
                        if(item.isIncome == 0){ //收入
                            switch(item.type){
                                case 0:
                                    item.iconClass = 'icongongzi';
                                    item.name = '工资';
                                    break;
                                case 1:
                                    item.iconClass = 'iconhuankuan';
                                    item.name = '理财';
                                    break;
                                case 2:
                                    item.iconClass = 'iconqita1';
                                    item.name = '其它';
                                    break;
                                default:
                                    item.iconClass = 'iconqita1';
                                    item.name = '其它';
                                    break;
                            }
                        }else{  //支出
                            switch(item.type){
                                case 0:
                                    item.iconClass = 'iconcanyin';
                                    item.name = '餐饮';
                                    break;
                                case 1:
                                    item.iconClass = 'iconjiaotong1';
                                    item.name = '交通';
                                    break;
                                case 2:
                                    item.iconClass = 'icongouwu';
                                    item.name = '购物';
                                    break;
                                case 3:
                                    item.iconClass = 'iconlvyou';
                                    item.name = '旅游';
                                    break;
                                case 4:
                                    item.iconClass = 'iconzhufangguihua';
                                    item.name = '房屋';
                                    break;
                                case 5:
                                    item.iconClass = 'iconlingshi';
                                    item.name = '零食';
                                    break;
                                case 6:
                                    item.iconClass = 'iconqita1';
                                    item.name = '其它';
                                    break;
                                default:
                                    item.iconClass = 'iconqita1';
                                    item.name = '其它';
                                    break;
                            }
                        }
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .record {
        width: 100%;
        height: 100%;
    }
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 45px;
        left: 0;
        overflow: scroll;
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
    .month_box .item_box:nth-of-type(1){
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
    .item_box .left_icon .iconhuankuan{
        color: #5c9ebd;
    }
    .item_box .left_icon .iconqita1{
        color: #1fca36;
    }
    .item_box .left_icon .icongongzi{
        color: #d32542;
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