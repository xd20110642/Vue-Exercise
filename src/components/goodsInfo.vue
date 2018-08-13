<template>
    <div>
        <!-- 轮播图组件 -->
        <carousel></carousel>
        <h1>我是商品详情--------------{{$route.params.id}}</h1>
    </div>
</template>
<script>
import Carousel from "./Carousel .vue"
export default {
    components:{
        Carousel
    }
}
</script>

<style lang="less" scoped>

</style>
