import Vue from 'vue'
import MintUI from 'mint-ui'//把所有组件都引入进来
import "mint-ui/lib/style.css"
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./lib/mui/css/mui.css"
import router from "./router/router.js"
import  VueResource from "vue-resource" //http请求
Vue.use(ElementUI)
Vue.use(MintUI) //全局实例化后 不需要再次单独声明
Vue.use(VueRouter) //全局实例化
Vue.use(VueResource)//全局实例化





var vue=new Vue({
    el:'#app',
    render:c => c(App),
    router
})











// Vue.component('xx',xx)//全局组件
// var login={
//     template:''
// }
// Vue.component('login',login)
// 使用组件
// <login>123</login>