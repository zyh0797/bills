<template>
    <div class="chart">
        <div class="top_box">
            <div class="item">
                <div class="title">账本名称</div>
                <div class="show">
                    <template>
                        <el-select v-model="book" placeholder="请选择">
                            <el-option 
                                v-for="item in books" 
                                :key="item.value" 
                                :label="item.label" 
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </div>
            </div>
            <div class="out_box">
                <div class="out_title">本月支出</div>
                <div class="out_num">1500.05</div>
            </div>
            <div class="in_box">
                <div class="in"><span>本月收入： 6500.35</span></div>
                <div class="in">
                    <span>预算剩余： 605.55</span>
                    <span><i class="iconfont iconchuangzuo"></i></span>
                </div>
            </div>
        </div>
        <div class="label_box">消费趋势</div>
        <div class="label_box">支出统计</div>
        <div class="label_box">收入统计</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                books:[
                    {value:0,label:'账本1'},
                    {value:1,label:'账sdfadfafd本2'},
                    {value:2,label:'账本3'}
                ],
                book:0
            }
        }
    }
</script>
<style scoped>
    .chart {
        width: 100%;
        height: 100%;
    }
    .top_box {
        width: 100%;
        height: auto;
        background-color: #3163c7;
        color: #fff;
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
    }
    .item .show {
        width: calc(100% - 100px);
        height: 100%;
        float: left;
    }
    .out_box {
        width: 100%;
        height: 50px;
    }
    .out_title {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 10px;
        padding-left: 20px;
    }
    .out_num {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        font-weight: bold;
        padding-left: 20px;
    }
    .in_box {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .in {
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;
        font-size: 10px;
    }
    .label_box {
        width: 100%;
        height: 30px;
        background-color: #fff;
        line-height: 30px;
        margin-top: 5px;
        padding-left: 15px;
        font-size: 14px;
        color: #fd3f3f;
        font-weight: bold;
    }
</style>