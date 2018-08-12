<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        {{name}}----------我是组件进来的参数
        <textarea placeholder="请输入要评论的内容（最多吐槽120字）" maxlength="120" v-model="mess">

        </textarea>
         <mt-button type="primary" size="large" @click="add">发表评论</mt-button>
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
            list:[],
            mess:''

        }
    },
    props:['id'],
    methods:{
        getComment(){
               let a=this.id;
               if (a==0){
                   a=1;
               }
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
        },
        add(){
            let a=this.mess.trim()
            if(a == ''){
                 this.$message({
                 message: '内容不能为空',
                 type: 'error',
                 duration:5000,
                 showClose:true
                });
                return;
            }else{
                let mess={content:a,user:{username:'我是新加的'},ctime:new Date()};
                this.list.push(mess);
                 this.$message({
                 message: '发表成功',
                 type: 'success',
                 duration:1000,
                 showClose:true
                });
            }
            console.log("添加数组成功")
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
