<template>
     <div class="shopcar"> 
         <!-- 商品列表区域 -->
         
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					 <mt-switch>关</mt-switch>
                     <img src="http://placehold.it/50x50" alt="">
                     <div class="info">
                         <h5>小米（MI）小米note</h5>
                         <p>
                             <span class="price">￥2199</span>
                             <a href="#">删除</a>
                         </p>
                     </div>
					</div>
				</div>
			</div>
        <!-- 结算区域 -->
            <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .shopcar{
        background-color: #eeeeee;
        overflow: hidden;
    }
</style>
