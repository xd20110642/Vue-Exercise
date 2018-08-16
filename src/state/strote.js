import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let car=JSON.parse(localStorage.getItem('goods')||'');
var store=new Vuex.Store({
    state:{
        //将购物车中的商品的数据用一个数组存储起来,存储一些商品的对象 {id:商品id,count:购买数量,price:商品的单价,selected:false}
        car:car,
    },
    mutations:{
        add(state,goods){//添加数据
            // 如果有就更新对应的数据 没有就添加
            // some 判断数组是否存在 
            let a=false;
            state.car.some(item => {
                if(item.id==goods.id ){
                    item.count+=parseInt(goods.count)
                    a=true;
                    return;
                }
            })

            if(!a){
                state.car.push(goods)
            }
            // 转换为字符串存储
            localStorage.setItem('goods', JSON.stringify(state.car))
        }
    },
    getters:{
        num(state){
            let  sum=0;
            state.car.forEach(item => {
                sum+=item.count
            })
            return sum
        }
    } 
})

export default store