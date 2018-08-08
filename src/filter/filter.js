// 引入vue全局对象
import Vue from 'vue'

/**
 * 时间过滤器
 * 第一个参数是 我们参数的值

 */
Vue.filter('dataForm',function(dataStr){

    if(dataStr !=''){
        return dataStr+'~';
    }
})