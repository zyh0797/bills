<template>
    <div class="home">
        <Header>
            <span slot="center-slot">我的账本</span>
            <span slot="right-slot">
                <i class="iconfont iconadd-select" @click="add"></i>
            </span>
        </Header>

        <div class="container">
            <div class="no_data" v-if="isNull">
                <div class="tips">你还没有创建任何账本,立即创建吧！</div>
                <div class="btn"><span @click="create">创建</span></div>
            </div>
            <div v-if='!isNull'>
                <div class="book_body" @click="goDetail()">
                    <span>item1</span>
                </div>
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
                isNull:false
            }
        },
        methods:{
            add(){
                console.log('you click the add buttom');
            },
            goDetail(){
                this.$router.push('/record');
            },
            create(){
                this.isNull = false;
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
        line-height: 60px;
        margin: 10px auto 0 auto;
        background-color: aqua;
        text-align: center;
    }
</style>