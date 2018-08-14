<template>
      <div class="mui-numbox">
                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="less" data-numbox-min="0" data-numbox-max="9">-</button>
                                <input id="test" class="mui-input-numbox" type="number" value="1" />
                                 <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>    
		</div>
</template>
<script>
import mui from "../lib/mui/js/mui.js" //引入mui.js
export default {
    data(){
        return{
            maxBox:false,
            minBox:false,
        }
    },
    mounted(){//dom操作 初始化
    let a=document.querySelector(".mui-numbox");
   
        mui(a).numbox();//初始化 输入框
        this.$nextTick(() => { //使用dom操作
            this.less(); 
            this.add(); 
        })
    },
    methods:{
        less(){
           let a= mui(".mui-numbox").numbox().getValue()
           let b=document.querySelector('.mui-btn-numbox-minus');
        //    alert(b)
            if (a==0){
                alert("不能再减了");
                mui(".mui-numbox").numbox().setValue(0)
                return;
            }else{
                 console.log(a)
            }
           
        },
        add(){
            let a= mui(".mui-numbox").numbox().getValue();
            if(a>=9){
                alert("没库存了");
            mui(".mui-numbox").numbox().setValue(9)
                return;
            }
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>
