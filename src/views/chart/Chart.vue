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
        <div class="chart_container">
            <div class="out_count_box">
                <div id="trend_chart" :style="{width: '100%', height: '200px', padding: '0 8px'}"></div>
            </div>
            <div class="out_count_box">
                <div id="in_chart" :style="{width: '100%', height: '200px', padding: '0 8px'}"></div>
            </div>
            <div class="out_count_box">
                <div id="out_chart" :style="{width: '100%', height: '200px', padding: '0 8px'}"></div>
            </div>
        </div>
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
        },
        methods: {
            drawLine(){
                let trendChart = this.$echarts.init(document.getElementById('trend_chart'));
                let outChart = this.$echarts.init(document.getElementById('out_chart'));
                let inChart = this.$echarts.init(document.getElementById('in_chart'));
                //消费折线图
                trendChart.setOption({
                    title:{
                        text:'每日消费',
                        left:'center'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [50, 64, 80, 934, 20, 35, 16, 48, 26, 54, 56, 14, 52, 56, 51, 50, 49, 48.5, 46.5, 20.5, 45, 58, 74, 85, 300],
                        type: 'line'
                    }]
                })

                //支出条形图
                outChart.setOption({
                    title:{
                        text:'支出统计',
                        left:'center'
                    },
                    tooltip:{
                        show:true
                    },
                    xAxis:{
                        data:["餐饮","交通","购物","旅游","房屋","零食","其他"]
                    },
                    yAxis:{},
                    series:[{
                        name:'支出统计',
                        type:'bar',
                        data:[1320,326,310,110,880,200,50],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,  //开启显示
                                    position:'top', //在上方显示
                                    textStyle:{ //数值样式
                                        color:'block',
                                        fontSize: 12
                                    }
                                }
                            }
                        }
                    }]
                });

                //收入条形图
                inChart.setOption({
                    title:{
                        text:'收入来源',
                        left:'center'
                    },
                    tooltip:{
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend:{
                        orient:'vertical',
                        left:'left',
                        data:['工资','理财','其他'],
                        selected:['工资','理财','其他']
                    },
                    series:[{
                        name:'收入统计',
                        type:'pie',
                        radius:'55%',
                        center:['50%','60%'],
                        data:[
                            {value:6500,name:'工资'},
                            {value:500,name:'理财'},
                            {value:350,name:'其他'},
                        ],
                        emphasis:{
                            itemStyle:{
                                shadowBlur:10,
                                shadowOffsetX:0,
                                shadowColor:'rgba(0,0,0,0.5)'
                            }
                        }
                    }]
                });
            }
        },
        mounted() {
            this.drawLine();
        },
    }
</script>
<style scoped>
    .chart {
        width: 100%;
        height: 100%;
    }
    .top_box {
        width: 100%;
        height: 130px;
        background-color: #3163c7;
        color: #fff;
    }
    .chart_container {
        width: 100%;
        height: calc(100% - 180px);
        position: fixed;
        top: 130px;
        left: 0;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .out_count_box {
        width: 100%;
        height: 200px;
        background-color: #fff;
        margin-top: 5px;
    }
    .item {
        width: 100%;
        height: 50px;
        line-height: 50px;
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
</style>