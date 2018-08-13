<template>
    <div>
         <h1>我是第{{$route.params.id}}张图片</h1>
        <div class="img">
            <p>其实这里应该放一堆标题的的但是我没有相关的api 所有就不写了 只写一个div来占位</p>
        </div>
        <!-- 缩略图插件 -->
        <div class="b">
            <!-- 这里面的img大小是用的box-size -->
            <vue-preview :slides="slide1" @close="handleClose" ></vue-preview>
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
            id:this.$route.params.id,
            slide1: [ //缩略图数据
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
        }
    },
  components:{
      comment
  },
  methods:{
       handleClose () {
        console.log('close event')
      }
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
    .b{
       img{
           box-shadow: 0 0 10px #999;
       }

    }
</style>

