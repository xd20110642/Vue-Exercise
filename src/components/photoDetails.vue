<template>
    <div>
         <h1>我是第{{$route.params.id}}张图片</h1>
        <div class="img">
            <p>其实这里应该放一堆标题的的但是我没有相关的api 所有就不写了 只写一个div来占位</p>
        </div>
        <!-- 评论组件  组件传参 -->
        <comment
        :id="id"></comment>
    </div>
</template>
<script>
import comment from './comment.vue'

export default {
    data(){
        return{
            id:this.$route.params.id
        }
    },
  components:{
      comment
  }
}
</script>
<style lang="less" scoped>
    .img{
        width: 100%;
        height: 100px;
        background-color: #cccccc;
        margin-top:10px;
    }
</style>

