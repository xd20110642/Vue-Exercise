<template>
    <div class="aaaaa">
        <el-container class="top">
            <!-- 顶部Head区域 -->
               <mt-header title="第一个vue项目" fixed></mt-header>
              
                <!-- 放置幻灯片组件 -->
            <!-- 路由区域 -->
            <el-main>
              <transition name="xiangdong" mode="out-in">
                 <router-view></router-view>
              </transition>
            </el-main>

            <!-- 底部tabar区域 -->
            <el-footer>
               <nav class="mui-bar mui-bar-tab">

                 <router-link to="/home" class="mui-tab-item">
                      <span class="mui-icon mui-icon-home"></span>
                      <span class="mui-tab-label">首页</span>
                 </router-link> 
                
                <router-link to="/member" class="mui-tab-item">
                     <span class="mui-icon  mui-icon-contact"></span>
                     <span class="mui-tab-label">会员</span>
                </router-link> 
                
                <router-link to="/shopcar" class="mui-tab-item">
                         <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                         <span class="mui-tab-label">购物车</span>
                </router-link>
               
                <router-link to="/search" class="mui-tab-item">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>

	        	    </nav>

            </el-footer>

        </el-container>
    </div>
</template>


<script>
// js组件导入 是需要{}括起来
import "./lib/mui/css/icons-extra.css"
import 'element-ui/lib/theme-chalk/base.css';
import {Header} from 'mint-ui'
export default {
    data(){
        return{

        }
    },
    created(){

    }

}
</script>


<style lang="less" scoped>
.aaaaa{
   overflow-x: hidden;
}
.top{
    padding-top: 40px;
   
}
 .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
    text-align: center;
    height: 100px;
    margin-top: 10px;
  }
    .el-footer{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #333;
    }
    
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    // background-color: #E9EEF3;
    // color: #333;
    text-align: center;
    // margin-top: 30%;
  }
  
  body > .el-container {
      width: 100% ;
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }




     .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    margin: auto;
    text-align: center;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
   margin-top: 10px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


//   // 动画效果
  .xiangdong-enter-active,.xiangdong-leave-active{
     transition: all .5s;
  }
  .xiangdong-enter{
    opacity: 0;
       transform: translateX(100%)
  }
  
  .xiangdong-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
       transform: translateX(-100%);
      position: absolute;

}
  
</style>


