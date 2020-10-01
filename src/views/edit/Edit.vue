<template>
    <div class="eidt">
        <Header>
             <span slot="left-slot" @click="back">
                <i class="iconfont iconarrow-lift"></i>
            </span>
            <span slot="center-slot">标题</span>
        </Header>
        <div class="container">
            <div class="item_box">
                <div class="item">
                    <div class="title">收支类型</div>
                    <div class="show">
                        <template>
                            <el-radio v-model="isIncome" label="0">收入</el-radio>
                            <el-radio v-model="isIncome" label="1">支出</el-radio>
                        </template>
                    </div>
                </div>
                <div class="item">
                    <div class="title">{{isIncome == '1'?'收入方式':'支出方式'}}</div>
                    <div class="show">
                        <template>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option 
                                    v-for="item in pay_type" 
                                    :key="item.value" 
                                    :label="item.label" 
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </div>
                </div>
                <div class="item">
                    <div class="title">{{isIncome == '1'?'收入金额':'消费金额'}}</div>
                    <div class="show limit">
                        <el-input v-model="number" placeholder="请输入金额"></el-input>
                    </div>
                </div>
                <div class="item">
                    <div class="title">{{isIncome == '1'?'收入来源':'消费类型'}}</div>
                    <div class="show">
                        <span  v-show="showIncome">
                            <template>
                                <el-select v-model="type_1" placeholder="请选择">
                                    <el-option 
                                        v-for="item in in_type" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                        </span>
                        <span  v-show="!showIncome">
                            <template>
                                <el-select v-model="type_2" placeholder="请选择">
                                    <el-option 
                                        v-for="item in out_type" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                        </span>
                    </div>
                </div>
                <div class="item">
                    <div class="title">备注</div>
                    <div class="show limit">
                        <el-input v-model="remark" placeholder="备注内容"></el-input>
                    </div>
                </div>
                <div class="item">
                    <div class="title">时间</div>
                    <div class="show limit">
                        <el-input v-model="time" placeholder="yyyy-mm-dd hh:mm:ss"></el-input>
                    </div>
                </div>
            </div>
            <div class="footerBtn" @click="add()">确定</div>
        </div>
    </div>
</template>
<script>
    import Header from '../../components/header/Header'
    export default{
        data(){
            return{
                isIncome: '0',
                showIncome: true,
                pay_type: [
                    {value:0,label:'微信'},
                    {value:1,label:'支付宝'},
                    {value:2,label:'银行卡'},
                    {value:3,label:'现金'},
                    {value:4,label:'其它'}
                ],
                value: 0,
                number:'',
                remark:'',
                time:'',
                type_1:0,
                type_2:0,
                in_type:[
                     {value:0,label:'工资'},
                     {value:1,label:'理财'},
                     {value:2,label:'其它'}
                ],
                out_type:[
                     {value:0,label:'餐饮'},
                     {value:1,label:'交通'},
                     {value:2,label:'购物'},
                     {value:3,label:'旅游'},
                     {value:4,label:'房屋'},
                     {value:5,label:'零食'},
                     {value:6,label:'其它'}
                ]
            }
        },
        methods:{
            back(){
                this.$router.back(-1);
            },
            add(){
                if(this.number == '' || this.number == null){
                    return;
                }
                if(this.time == null || this.time == ''){
                    return;
                }
                console.log(this.isIncome,this.value,this.type_1,this.type_2,this.number,this.remark,this.time)
                this.$router.replace('/record')
            }
        },
        components:{
            Header
        },
        watch:{
            isIncome(newValue,oldValue){
                if(newValue == 1){
                    this.showIncome = true
                }else{
                    this.showIncome = false
                }
            }
        }
    }
</script>
<style scoped>
    .eidt {
        width: 100%;
        height: 100%;
    }
    .container{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 45px;
    }
    .item_box {
        width: 100%;
        height: auto;
        background-color: #fff;
        margin-top: 5px;
    }
    .item {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }
    .item .title {
        width: 100px;
        height: 100%;
        float: left;
        text-align: center;
        color: #898;
    }
    .item .show {
        width: calc(100% - 100px);
        height: 100%;
        float: left;
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