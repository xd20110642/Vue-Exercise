<template>
    <div>
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/newlist">
		                   <img src="../img/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/photoList">
                              <img src="../img/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/goodslist" >
                            <img src="../img/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-location"></span> -->
                              <img src="../img/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-search"></span> -->
                              <img src="../img/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-phone"></span> -->
                              <img src="../img/menu6.png" alt="">
		                    <div class="mui-media-body">练习我们</div></a></li>
		        </ul> 
		</div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
   .mui-grid-view,.mui-grid-9{
       background-color: white;
       border: 0;
       img{
           width: 60px;
           height: 60px;
       }
       .mui-media-body{
           font-size: 12px;
       }
   }
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
  
</style>
