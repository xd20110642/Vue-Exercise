<template>
<div class="block">
    <el-carousel height="200px">
      <el-carousel-item v-for="(item,index) in list" :key="index">
        <img :src="item.url">
      </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
import url from "../url/url.js"
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        getList(){
            this.$http.get(url[0]+'1').then((result) => {
                console.log(result.data.data)
                let arr=result.data.data;
                for(let i=0;i<4;i++){
                    this.list.push(arr[i])
                }
                 this.$message({
                 message: '请求成功',
                 type: 'success',
                 duration:5000,
                 showClose:true
                });
                return this.list
            }).catch((err) => {
               
               this.$message({
                 message: '警告哦，这是一条警告消息',
                 type: 'warning',
                 duration:5000,
                 showClose:true,
             });
                
               console.warn(err);
                
            });
        }
    },
    created(){
        this.getList()
    }
}
</script>

<style lang="less" scoped>
  .el-carousel__item img{
      width: 100%;
      height: 100%;
  }
</style>
