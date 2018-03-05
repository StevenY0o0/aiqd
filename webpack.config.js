const path = require('path');

module.exports = {
	//入口文件的配置项
    entry:{
    	entry: './src/index.js'
    },
    //出口文件的配置项
    output:{
    	filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
    	rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{
    	contentBase: "./dist",
	    historyApiFallback: true,
	    inline: true
    }
};