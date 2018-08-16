<template>
      <div class="mui-numbox">
                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="less" data-numbox-min="0">-</button>
                                <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="nubox"/>
                                 <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>    
		</div>
        <!-- 子组件什么时候把 数据传递给父组件 -->
</template>
<script>
import mui from "../lib/mui/js/mui.js" //引入mui.js
export default {
    data(){
        return{
            maxBox:this.max,
            minBox:false,
        }
    },
    props:['max']
    ,
    mounted(){//dom操作 初始化
    let a=document.querySelector(".mui-numbox");
   
        mui(a).numbox();//初始化 输入框
        this.$nextTick(() => { //使用dom操作
            this.less(); 
            this.add(); 
            console.log(this.max)
            // mui jsAPI
            mui('.mui-numbox').numbox().setOption('max',this.max)
             mui('.mui-numbox').numbox().setOption('min',0)
        })
    },
    methods:{
        less(){
           let a= mui(".mui-numbox").numbox().getValue()
           let b=document.querySelector('.mui-btn-numbox-minus');
        //    alert(b)
            // if (a==0){
            //     alert("不能再减了");
            //     mui(".mui-numbox").numbox().setValue(0)
            //     return;
            // }else{
            //      console.log(a)
            // }
           
        },
        add(){
            // let a= mui(".mui-numbox").numbox().getValue();
            // if(a>=9){
            //     alert("没库存了");
            // mui(".mui-numbox").numbox().setValue(9)
            //     return;
            // }
        },
        countChange(){
            //每当文本框数据被修改的时候 传递数据
        console.log(this.$refs.nubox.value)
        // 字符串 --------> 数字
        this.$emit('getNum',parseInt(this.$refs.nubox.value))
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>
