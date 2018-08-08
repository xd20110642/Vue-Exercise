import VueRouter from "../../node_modules/vue-router";
import home from "../components/home.vue"
import member from "../components/member.vue"
import search from "../components/search.vue"
import shop from "../components/shopcar.vue"
import newList from "../components/newList.vue"
// import "../lib/mui/css/mui.css"
const router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:"/member",component:member},
        {path:"/search",component:search},
        {path:'/shopcar',component:shop},
        {path:'/home/newlist',component:newList}
    ],
    linkActiveClass:"mui-active" //设置激活时的路由样式
})

export default router