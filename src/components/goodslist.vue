<template>
    <div class="goods-list">
      <router-link :to="{name:'goods',params:{id:index}}" class="goods-item" v-for="(item,index) of list" :ket="index" tag="div">
         <img :src="item.url" alt="">
         <h1 class="title">{{item.name}}</h1>
         <div class="info">
             <p class="price">
                 <span class="now">￥{{item.now}}</span>
                 <span class="old">￥{{item.old}}</span>
             </p>
            <p class="sell">
                <span>{{item.text}}</span>
                 <span>剩余{{item.num}}件</span>
            </p>
         </div>
      </router-link>
      
    <mt-button type="primary" size="large" @click="add">加载更多</mt-button>
    </div>

     <!-- <div class="goods-item">
         <img src="http://placehold.it/300x300" alt="">
         <h1 class="title">小米123333333323123123</h1>
         <div class="info">
             <p class="price">
                 <span class="now">￥2199</span>
                 <span class="old">￥2399</span>
             </p>
            <p class="sell">
                <span>热卖中</span>
                 <span>剩余60件</span>
            </p>
         </div>
      </div>



     <div class="goods-item">
         <img src="http://placehold.it/300x300" alt="">
         <h1 class="title">小米</h1>
         <div class="info">
             <p class="price">
                 <span class="now">￥2199</span>
                 <span class="old">￥2399</span>
             </p>
            <p class="sell">
                <span>热卖中</span>
                 <span>剩余60件</span>
            </p>
         </div>
      </div> -->




</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    id:0,
                    url:'http://placehold.it/300x300',
                    name:'小米',
                    now:2399,
                    old:2499,
                    text:'热卖中',
                    num:60,
                },
                {
                    id:1,
                    url:'http://placehold.it/300x300',
                    name:'三星',
                    now:5399,
                    old:6499,
                    text:'热卖中',
                    num:59,
                },
                {
                    id:2,
                     url:'http://placehold.it/300x300',
                    name:'苹果',
                    now:8899,
                    old:9999,
                    text:'含泪甩卖',
                    num:10,
                },
                {
                    id:3,
                    url:'http://placehold.it/300x300',
                    name:'小米8',
                    now:2699,
                    old:2499,
                    text:'抢购',
                    num:10,
                },
                {
                    id:4,
                    url:'http://placehold.it/300x300',
                    name:'小米',
                    now:2399,
                    old:2499,
                    text:'热卖中',
                    num:60,
                },
               {
                    id:5,
                   url:'http://placehold.it/300x300',
                    name:'小米',
                    now:2399,
                    old:2499,
                    text:'热卖中',
                    num:60,
                }
            ]
        }
    },
    methods:{
        add(){
            this.list=this.list.concat(this.list); //拼接数组
        }
    }
}
</script>

<style lang="less" scoped>
    .goods-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .goods-item{
            width: 49%;
            border: 1px solid#ccc;
            box-shadow: 0 0 20px #cccccc;
            margin-bottom: 10px;
            padding: 2px;
            display: flex; 
            flex-direction: column;
            justify-content: space-between;
            min-height: 237px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
                box-sizing: border-box;
            }
          
            .info{
                background-color: #eeeeee;
               
                p{
                      margin-bottom: 0px;
                }
              
                .price{
                    margin-bottom: 0;
                   span{
                       margin-left: 10px;
                   }
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration-line: line-through;//添加划线
                    }
                    .sell{
                        display: flex;
                        justify-content: space-between;
                        padding: 5px;
                    }
                }
            }
        }
    }
</style>
