<template>
    <div>
			<div class="mui-content-padded">
				<ul>
				<li v-for="(item,index) in list" :key="index">
					<img v-lazy="item.url" data-preview-group="1">
				</li>
			</ul>
			</div>
			
    </div>
</template>

<script>
import {Lazyload} from 'mint-ui'
import url from "../url/url.js"
import Vue from 'vue';
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
                return this.list
            }).catch((err) => {
               
               this.$message({
                 message: '警告哦，这是一条警告消息',
                 type: 'erro',
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
			// return this.index
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
		img{
			width: 100%;
			// height: 50%;
		}
	}
}
	
</style>
