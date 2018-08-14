<template>
    <div class="goodsinfo-container">

        <transition name="xd"
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter" 
        >
             动画小球
              <div class="ball" v-show="showa"> </div>
        </transition>
       

       

        <!-- 轮播图组件 -->
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                      <Carousel ></Carousel>
					</div>
				</div>
		</div>

       <!-- 购买区 -->
       <div class="mui-card">
				<div class="mui-card-header">{{list[0].title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p class="price">
                            市场价：￥<del>{{list[0].market_price}}</del> &nbsp;&nbsp;销售价:<span class="now_price">￥{{list[0].sell_price}}</span>
                        <p>购买数量:
                            <!-- 组件传值   父组件向子组件传值 子组件向父组传递-->
                          <goods-num></goods-num>
                        </p>
                        <p>

                

                            <mt-button type="primary" size="small">立即购买</mt-button>
                             <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
                        </p>
                        </p>
					</div>
				</div>
		</div>

        <!-- 商品参数区 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content ">
					<div class="mui-card-content-inner">
						<p>
                            商品货号:{{list[0].goods_no}}
                        </p>
                        <p>
                            库存情况：{{list[0].stock_quantity}}件
                        </p>
                        <p>
                            上架时间:{{list[0].add_time}}
                        </p>
					</div>
                     <!-- <mt-button type="primary" size="large" plain @click="a">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="a">商品评论</mt-button> -->
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(list[0].id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="goComment(list[0].id)">商品评论</mt-button>
                </div>
		</div>
    </div>
</template>
<script>
import Carousel from "./Carousel .vue"
import goodsNum from "./goodsNum.vue"
export default {
    data(){
        return{
            list:[
                {
                    id:0,
                    title:'小米新品',
                    add_time:'2015-04-19',
                    goods_no:"SD397",
                    stock_quantity:20,
                    market_price:269,
                    sell_price:199
                }
            ],
            showa:false,//控制小球
        }
    },
    components:{
        Carousel,
        goodsNum
    },
    methods:{
        goDesc(event){//点击使用编程式导航 跳转到图文介绍页面
            this.$router.push({name:'goodsDesc',paramas:{id:event}})
        },
        goComment(event){//点击跳转到 评论界面
            this.$router.push({name:'goodsComment',paramas:{id:event}})
        },
        add(){//添加到购物车  显示小球动画
          this.showa=!this.showa;
        },
        beforeEnter(el){//动画的初始化构造函数  官方文档操作  el就是我们要操作的dom 实例 支持全部的dom操作
           el.style.transform="translate(0,0)" //恢复到初始位置  也就是我们定义的位置
        },
        enter(el,done){//动画进入函数   动画效果没有生效 修改小球的位置 
            el.offsetWidth;//必须要加入这个 不然没有动画效果
            el.style.transform="translate(94%,10%)";//结束动画
            el.style.transtion='all 5s'

            done() //afterEnter的调用
        },
        afterEnter(el){
            // this.showa=!this.showa;
        }    
        }
}
</script>

<style lang="less" scoped>
    .goodsinfo-container{
        // background-color: #eee;
        overflow: hidden;
        margin-top: -5%;
        .mui-card-content-inner{
            padding: 0;
            .now_price{
                color: red;
                font-weight: bold;
                font-size: 14px;
            }
        }
        .mui-card-content{
            text-align: left;
            padding-left: 10px;
        }
         .mui-card-footer{
             display: block;
             button{
                 margin: 10px 0;
             }
         }
       .ball{
           width: 15px;
           height: 15px;
           border: 1px solid red;
           position: absolute;
           background-color: red;
           border-radius: 50%;
           top: 350px;
           left: 155px;
           z-index: 100;
       }  
    }
    // 动画样式

</style>
