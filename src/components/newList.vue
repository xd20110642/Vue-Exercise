<template>
    <div>
        <!-- <h1>新闻组件</h1> -->
        	<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) of newsList" :key="index">
					<router-link :to="{name:'newInfo',params:{id:index,time:item.ptime}}">
						<img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.ptime|dataForm}}</span>
                                <span>点击次数</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/23289791?s=40&v=4">
						<div class="mui-media-body">
							<h1>木屋</h1>
							<p class='mui-ellipsis'>
                                  <span>发表时间：</span>
                                <span>点击次数</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/23289791?s=40&v=4">
						<div class="mui-media-body">
							<h1>CBD</h1>
							<p class='mui-ellipsis'>
                                  <span>发表时间：</span>
                                <span>点击次数</span>
                            </p>
						</div>
					</a>
				</li>

			</ul>
    </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui'; 
import dataForm from '../filter/filter.js' //过滤器  名字要和一样
import url from '../url/url'
export default {
    data(){
        return{
            newsList:[]
        }
    },
    methods:{
        getList(){
            this.$http.get(url[1]).then((result) => {
                let mess=result.data.data.auto;
                this.newsList.push(...mess) //数组解构
                  console.log(this.newsList)
                 this.$message({
                 message: '请求成功',
                 type: 'success',
                 duration:5000,
                 showClose:true
                });
            }).catch((err) => {
                 this.$message({
                 message: '请求失败',
                 type: 'success',
                 duration:5000,
                 showClose:true
                });
            });
        }
    },
    created(){
        this.getList()
    }
}
</script>
<style lang="less" scoped>
    .mui-table-view{
        li{
           h1{
               font-size: 12px;
               text-align: left;
               white-space: nowrap
           }
          .mui-ellipsis{
              font-size: 12px;
              color: #226aff;
              display: flex;
              justify-content: space-between;//2端对齐
          }
        }
    }
</style>
