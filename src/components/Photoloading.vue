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
export default {
	data(){
		return{
			list:[],
		}
	},
	props:{
		index:{
			type:Number,
			default:1
		}
	}
	,
   methods:{
	   getImg(){
		    this.$http.get(url[0]+this.index).then((result) => {
                console.log(result.data.data)
                let arr=result.data.data;
                this.list.push(...arr)
                 this.$message({
                 message: '请求成功',
                 type: 'success',
                 duration:1000,
                 showClose:true
                });
                return this.list
            }).catch((err) => {
               
               this.$message({
                 message: '警告哦，这是一条警告消息',
                 type: 'warning',
                 duration:1000,
                 showClose:true,
             });
                
               console.warn(err);
                
            });
	  	 }
	   },
	   created(){
		   this.getImg()
		  console.log(this.index)
	   },
	   watch:{
		 index(xin,old){ //监听属性 前面是我们data里面定义的变量
		   this.index =xin;
		   console.log(index+'123')
		   return this.index;
			//    this.getImg();
			  
		   }
	   }
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
