<template>
    <div>
			<div class="mui-content-padded">
				<ul>
				<router-link :to="{name:'photo',params:{id:index}}" v-for="(item,index) in list" :key="index" tag="li">
					<img v-lazy="item.url" data-preview-group="1">
					<div class="text">
						<div class="info">
							啦啦啦德玛西亚
						</div>						
					</div>
				</router-link>
			</ul>
			</div>
			
    </div>
</template>

<script>
import {Lazyload} from 'mint-ui'
import url from "../url/url.js"
export default {
	data(){
		return{
			list:[],
			page:1
		}
	},
	props:['index']
	,
   methods:{
	   getImg(){//发送网络请求
		   console.log(url[0]+this.page)
		    this.$http.get(url[0]+this.page).then((result) => {
				let arr=result.data.data;
					this.list.push(...arr)
					this.$message({
                 message: '请求成功',
                 type: 'success',
                 duration:1000,
                 showClose:true,
             });
                return this.list
            }).catch((err) => {
               
               this.$message({
                 message: '警告哦，这是一条警告消息',
                 type: 'warn',
                 duration:1000,
                 showClose:true,
             });
                
               console.warn(err);
            });
		   } 
	   },
	   created(){//第一次初始化 图像列表
		   this.getImg()
	   },
	   watch:{//监听id的变化 然后调用函数
		 index:function(cur,old){ //监听属性 前面是我们data里面定义的变量
		  console.log("子组件的监听属性被触发"+cur)
			  this.page=cur;
			  console.log("子组件的监听属性被触发"+this.page)
			  this.list=[];
			 this.getImg();
		   }
	   },

   }

</script>
<style lang="less" scoped>
.mui-content-padded{
	ul li{
		list-style: none;
		box-shadow: 0 0 10px #999; 
		margin: 10px auto;
		position: relative;
		img{
			width: 100%;
			// height: 50%;
			// vertical-align: middle;
		}
		.text{
			width: 100%;
			position: absolute;
			bottom: 30%;
			margin: auto;
			background-color: transparent;
			.info{
				color: red;
				text-align: center;
			}
		}
	}
}
	
</style>
