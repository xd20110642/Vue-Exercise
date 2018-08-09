<template>
   <div>
       <h3>新闻标题</h3>
       <p>
           <span>发表时间：{{time}}</span>
           <span>点击：0次</span>
       </p>
       <hr>
       <div class="content">
           我是第{{id}}新闻
       </div>
       <br>
        <!-- 评论组件  这里需要父组件向子组件传递值 -->
        <comment
        :id="id"
        ></comment>
        
        


   </div>
</template>
<script>
import comment from './comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            time:this.$route.params.time
        }
    },
    methods:{

    },
    created(){
        // 注意 $router和route的区别
        console.log(this.$route.params.id)
    },
    components:{
        comment
    }
}
</script>
<style lang="less" scoped>
    h3{
        font-weight: bold;
    }
    p{  
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>


