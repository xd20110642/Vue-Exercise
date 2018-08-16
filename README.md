
##使用了element和mint-ui vue组件模板

##使用了mui样式模板  mui是一个类似于boostrapd的样式模板

## 移除严格模式 使用babel-plugin-transform-remove-strict-mode  插件  然后再.babelrc配置文件中使用

##vue缩略图插件  npm i vue2-preview -S 文档详情GitHub

##使用了vuex状态管理插件  利用vuex状态管理插件完成对于组件传值的过程
---------------
通过这个项目深入的练习的vue和webpack的知识，而且这个项目没有使用vue-cli，创建 而是我手动创建了类似vue-cli的目录结构
**注意： router ---------------- route  的区别 吃了大苦头**

** 当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)**

1.初始化dom 需要再mounted 函数里来完成

2.watch：{
   a(a,b){//监听属性 前面是我们data里面定义的变量  相当于a就是我们再data里面的定义的数据

   },
   'props里面的数据'(a,b){

   } 
}

3.对于数组的操作可以在watch里面监听到有变换 那么就清空

4.在router-link 中使用 tag="li"   ========> 将a链接渲染成li标签

5.el-footer 有一个height:60 这个高度影响了 在商品列表里面的按钮点击

6.半场动画 只能使用js钩子函数   在enter钩子函数中 必须使用 el.offsetWdith 否则没有动画效果
