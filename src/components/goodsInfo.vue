<template>
    <div class="goodsinfo-container">

        <transition name="xd"
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter" 
        >
             动画小球
              <div class="ball" v-show="showa" ref="ball"> </div>
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
                          <goods-num
                          @getNum="getSelectCount"
                          :max="list[0].stock_quantity"
                          ></goods-num>
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
            selectedCount:1,//保存用户选中的数量
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
        //   拼接出一个保存到strore中car数组里的 商品信息对象
          let goodsInfo={id:this.list[0].id,count:this.selectedCount,price:this.list[0].sell_price,selected:true}
        //   console.log(goodsInfo)
        //   保存到vuex中
        this.$store.commit('add',goodsInfo)
        console.log(this.$store.state.car)
        },
        beforeEnter(el){//动画的初始化构造函数  官方文档操作  el就是我们要操作的dom 实例 支持全部的dom操作
          el.style.transform = "translate(0,0)"; //恢复到初始位置  也就是我们定义的位置
        },
        enter(el,done){//动画进入函数   动画效果没有生效 修改小球的位置 
            el.offsetWidth;
        let ballPosition=this.$refs.ball.getBoundingClientRect();//获取小球
       let bade=document.querySelector('#bage').getBoundingClientRect();//获取徽标
        let xDist=ballPosition.left-bade.left;
        let yDist=ballPosition.top-bade.top;
        console.log(xDist);
        console.log(yDist);
        el.style.transform="translate(${xDist}px,${yDist}px)"
        el.style.transition="all 1s cubic-bezier(.17,.67,.83,.67)"
           done() //afterEnter的调用
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()
        },
        afterEnter(el){
            this.showa=!this.showa;
        },
        getSelectCount(count){
            // 子组件把 选中的数量传递给父组件
            this.selectedCount=count;
            // console.log(document.querySelector('#bage').value())
            
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
           top: 54%;
           left: 40%;
           z-index: 100;
       }  
    }
    // 动画样式

</style>
