import VueRouter from "../../node_modules/vue-router";
import home from "../components/home.vue"
import member from "../components/member.vue"
import search from "../components/search.vue"
import shop from "../components/shopcar.vue"
import newList from "../components/newList.vue"
import newInfo from "../components/newsInfo.vue"
import photolist from "../components/photoList.vue"
import photoloading from "../components/photoloading.vue"
const router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home',},
        {path:'/home',component:home},
        {path:"/member",component:member},
        {path:"/search",component:search},
        {path:'/shopcar',component:shop},
        {path:'/home/newlist',component:newList},
        {path:'/home/newInfo/:id',component:newInfo,name:'newInfo'}, //路由传参
        {path:'/home/photolist',component:photolist,
        children:[
            {path:'photoloading/:id',component:photoloading},
        ]
        },
    ],
    linkActiveClass:"mui-active" //设置激活时的路由样式
})

export default router