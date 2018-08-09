<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        {{name}}----------我是路由传递进来的参数
        <textarea placeholder="请输入要评论的内容（最多吐槽120字）" maxlength="120">

        </textarea>
         <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt">


        </div>
        <div class="cmt-list" v-for="(item,index) of list" :key="index">
             <div class="cmt-item">
            <div class="cmt-title">
               第{{index+1}}楼:&nbsp;&nbsp; 用户:{{item.user.username}}&nbsp;&nbsp;发表时间：{{item.ctime}}
            </div>
            <div class="cmt-body">{{item.content}}</div>
         </div>
        </div>
        
       
       
       
        <mt-button type="default" size="large" plain @click="doubule">加载更多</mt-button> 

       
    </div>
</template>
<script>
import url from '../url/url.js'
export default {
    data(){
        return{
            name:this.id, //这个是接受通过组件传值的参数 当然也可以使用id
            list:[]

        }
    },
    props:['id'],
    methods:{
        getComment(){
               let a=this.id;
                console.log(url[2]+this.id)
            this.$http.get(url[2]+this.id).then((result) => {
                let arr=result.body.data.normal.list
                console.log(result.body.data.normal.list)
                this.list.push(...arr)
            }).catch((err) => {
                console.error(err)
                alert(err)
            });
        },
        doubule(){
            // 复制一份数组
            let arr=[];
            arr.push(...this.list);
            this.list.push(...arr)
        }
    },
    created(){
        this.getComment()
    }
}
</script>
<style lang="less" scoped>

textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
}
    h3{
        text-align: left;
    }
    .cmt-list{
        margin: 5px auto;
        .cmt-item{
            .cmt-title{
                background-color: #cccccc;
                font-size: 12px;
                line-height: 30px;
            }
            .cmt-body{
                    text-indent: 2em;
                    line-height: 35px;
            }
        }
    }
</style>
