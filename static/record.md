# aporia1: 在指定区域内滑动
    chart页面的顶部和底部的高度固定，中间部分使用scroll，使用了css的calc属性设置高度。
    优点：简单易实现
    缺点：兼容性问题，calc属性Chrome:26.0 IE:9.0 火狐:16.0 Safari:7.0 Opera:15.0
# aporia2: 使用Element与手机端的适配
    第一版的时，修改了node_modules中element模块的index.css文件达到了效果，但上传到github上的项目node_modules中的内容不会上传，原本设置就失效了，目前通过修改其父元素来达到目的，但效果不是很好
# aporia3：统计数据的可视化
    为了实现记账数据的图表可视化，引用了Echarts图表插件，照着官方文档还挺好用的，包含了各种统计图，这里我也只是使用了几个简单的统计图。
# aporia4：vue路由跳转传参
    一开始使用了params属性传值，但忘了在路由配置文件中配置name属性，失败了，后改用query属性
   ## 路由传值的三种方式：
        1、通过动态路由方式 ：
            //跳转页面
            let id = 1; 
            this.$router.push('/path'+id);
            //跳转后页面获取参数
            this.#route.params.id;
        2、通过query属性传值
            //跳转页面
            this.$router.push({path:'/path',query:{id:1}})
            //跳转后页面获取参数
            this.$route.query.id;
        3、通过params属性传值
            //路由配置文件
            {path:'/edit',name:'Edit',component:Edit}
            //跳转页面
            this.$router.push({name:'Edit',params:{id:1}})
             //跳转后页面获取参数
            this.$route.params.id;
# aporia5：阻止冒泡
    在外层div有跳转事件时，在这个div的内部加了一个span做一个弹窗事件。
    知道这个是要阻止事件冒泡的话也不难，因为vue里面提供了阻止事件冒泡的机制@click.stop
# aporia6: vuex的理解
    官方解释：vuex是一个专为vue.js应用程序开发的 状态管理模式。
    它采用集中式存储管理应用的所有的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    通俗理解：全局变量