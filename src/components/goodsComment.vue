<template>
    <div>
        <h3>商品评论界面-----{{$route.params.id}}</h3>
        <hr>
        <!-- 评论组件 -->
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
            id:this.$route.params.id
        }
    },
    components:{
        comment
    }
}
</script>

<style lang="less" scoped>
    h3{
        font-size: 14px;
    }
</style>
