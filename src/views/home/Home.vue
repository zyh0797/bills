<template>
    <div class="home">
        <Header>
            <span slot="center-slot">我的账本</span>
            <span slot="right-slot">
                <i class="iconfont iconadd-select" @click="showIt"></i>
            </span>
        </Header>

        <div class="container">
            <div class="no_data" v-if="isNull">
                <div class="tips">你还没有创建任何账本,立即创建吧！</div>
                <div class="btn"><span @click="create">创建</span></div>
            </div>
            <div v-if='!isNull'>
                <div class="book_body" @click="goDetail()" v-for="item in books" :key="item.id">
                    <div class="left_icon">
                        <img class="book_logo" :src="item.url" alt="">
                    </div>
                    <div class="right_info">
                        <div class="top_show">
                            <span>{{item.name}}</span>
                            <span class="del_icon" @click.stop="del(item.id)"><i class="iconfont iconashbin"></i></span>
                        </div>
                        <div class="bottom_show">
                            <span>{{item.time}}</span> | <span>预算: {{item.num}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup_moudle" v-if="showPopup">
            <div class="popup_title">
                添加账本
            </div>
            <div class="popup_body">
                <div class="item">
                    <div class="label_title">账本名称:</div>
                    <div class="input_body"><input type="text" v-model="addName" placeholder="请输入账本名称"></div>
                </div>
                <div class="item">
                    <div class="label_title">账本预算:</div>
                    <div class="input_body"><input type="text" v-model="addNum" placeholder="请输入账本预算"></div>
                </div>
            </div>
            <div class="popup_btn">
                <div class="cancel_btn" @click="hideIt">取消</div>
                <div class="sure_btn" @click="add">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
    import { MessageBox,Toast } from 'mint-ui';
    import Header from '../../components/header/Header';
    export default{
        data(){
            return{
                isNull:false,
                showPopup:false,
                books:[
                    {id:1,name:'my frist book',url:require('../../assets/images/1.jpg'),time:'2020-10-09',num:2500},
                    {id:2,name:'my second book',url:require('../../assets/images/2.jpg'),time:'2020-10-09',num:1000},
                    {id:3,name:'my third book',url:require('../../assets/images/2.jpg'),time:'2020-10-09',num:500},
                    {id:4,name:'my fouth book',url:require('../../assets/images/1.jpg'),time:'2020-10-09',num:2000}
                ],
                addName:'',
                addNum:0
            }
        },
        methods:{
            hideIt(){
                this.showPopup = false;
            },
            showIt(){
                this.showPopup = true;
            }
            ,
            add(){
                let obj = {};
                obj.id = this.books.length + 1;
                if(this.addName != null){
                    obj.name = this.addName;
                }else{
                    MessageBox.alert('请设置账本名称!');
                    return;
                }
                if(this.addNum != 0){
                    obj.num = this.addNum;
                }else{
                    MessageBox.alert('请设置账本预算!');
                    return;
                }
                obj.time = '2020-10-10';
                obj.url = require('../../assets/images/1.jpg');
                this.books.push(obj);
                this.showPopup = false;
            },
            goDetail(){
                this.$router.push('/record');
            },
            create(){
                this.isNull = false;
            },
            del(id){
                MessageBox.confirm('确定删除该账本吗?').then(action => {
                    console.log('del book id is ',id)
                })
            }
        },
        components:{
            Header
        }
    }
</script>
<style scoped>
    .home {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ededed;
    }
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 45px;
        overflow: scroll;
    }
    .no_data {
        width: 100%;
        height: auto;
        background-color: #fff;
    }
    .tips {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }
    .btn {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .btn span {
        padding: 5px 20px;
        background-color: #5261ef;
        border-radius: 5px;
        font-size: 16px;
        color: #fff;
    }
    .container .book_body {
        width: 90%;
        height: 60px;
        text-align: left;
        margin: 10px auto 0 auto;
        background-color: #fff;
    }
    .container .book_body .left_icon {
        width: 60px;
        height: 60px;
        float: left;
    }
    .container .book_body .left_icon .book_logo {
        width: 50px;
        height: 50px;
        margin: 5px;
        border-radius: 5px;
    }
    .container .book_body .right_info {
        width: calc(100% - 60px);
        height: 60px;
        float: left;
        background-color: #fff;
    }
    .container .book_body .right_info .top_show {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
    }
    .container .book_body .right_info .top_show .del_icon {
        float: right;
        margin-right: 20px;
    }
    .container .book_body .right_info .top_show .del_icon .iconfont{
        font-size: 25px;
        color: red;
    }
    .container .book_body .right_info .bottom_show {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-left: 10px;
        font-size: 12px;
        color: #352e2e;
    }
    .popup_moudle {
        width: 90%;
        height: auto;
        background-color: #3c88f1;
        color: #fff;
        text-align: center;
        z-index: 999;
    }
    .popup_title {
        width: 100%;
        height: 25px;
        line-height: 25px;
    }
    .popup_body {
        width: 100%;
        height: auto;
    }
    .item {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
    }
    .label_title {
        width: 80px;
        height: 100%;
        float: left;
        text-align: right;
        font-size: 14px;
        
    }
    .input_body {
        width: calc(100% - 80px);
        height: 100%;
        float: left;
    }
    .input_body input {
        width: 90%;
        height: 25px;
        box-sizing: border-box;
        border: none;
        border-radius: 15px;
        padding: 0 15px;
    }
    .popup_btn {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
    .cancel_btn {
        width: 50%;
        height: 100%;
        background-color: salmon;
        float: left;
        color: red;
    }
    .sure_btn {
        width: 50%;
        height: 100%;
        background-color: rgb(123, 218, 86);
        float: left;
        color: #fff;
    }
</style>