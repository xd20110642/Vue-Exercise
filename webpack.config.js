const path=require('path')
const webpack=require('webpack')
const htmlWebpackPlugn=require('html-webpack-plugin')
const {VueLoaderPlugin}=require("vue-loader")

module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/  //排除node包
                
            },
            {
                test:/\.sass$/,
                use:["style-loader","css-loader","node-sass","sass-loader"]
            },
            {
                test:/\.(ttf|svg|eot|woff|woff2)$/,
                use:'url-loader'
            },
            {
                test:/\.(jpg|png)$/,
                use:'url-loader'
            }
            

        ]
    },
    plugins:[
        new htmlWebpackPlugn({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve:{
        alias:{
            "vue$":'vue/dist/vue.js'
        }
    }
}