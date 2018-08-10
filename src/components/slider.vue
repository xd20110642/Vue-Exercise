<template>
	<div>
  			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">

						<a :class="['mui-control-item',index==0? 'mui-active':'']" v-for="(item,index) of alist" :key="index"
							@click="SetNum(index)"
						>
							{{item}}
						</a>
					
					</div>
				</div>
			</div> 
			<!-- 父组向子组件传值 -->
			<photoloading
			:index="num"
			></photoloading>
	</div>	
</template>
<script>
import {Lazyload} from 'mint-ui'
import mui from "../lib/mui/js/mui.js"
import photoloading from "./photoloading.vue"
export default {
	data(){
		return{
			alist:[
				"全部","家居","社会社会","娱乐娱乐","开心开心","伤心伤心","奇葩奇葩"
			],
			num:1
		}
	},
    mounted(){
		mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		scrollY: true,
		indicators: false,
		});
	},
	methods:{
		SetNum(index){			
			this.num=index+1;
			console.log(this.num)
		}
	},
	components:{
        photoloading,
	},
	watch:{
		num(){
			console.log("监听属性被触发了")
			return this.num;
		}
	}
}
</script>
<style lang="less" scoped>

</style>
