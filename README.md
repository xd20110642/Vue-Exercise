
##使用了element和mint-ui vue组件模板

##使用了mui样式模板  mui是一个类似于boostrapd的样式模板

## 移除严格模式 使用babel-plugin-transform-remove-strict-mode  插件  然后再.babelrc配置文件中使用
---------------
通过这个项目深入的练习的vue和webpack的知识，而且这个项目没有使用vue-cli，创建 而是我手动创建了类似vue-cli的目录结构
**注意： router ---------------- route  的区别 吃了大苦头**

** 当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)**

1.初始化dom 需要再mounted 函数里来完成
2.watch：{
   a(){//监听属性 前面是我们data里面定义的变量  相当于a就是我们再data里面的定义的数据

   } 
}