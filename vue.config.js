module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$':'vue/dist/vue.esm.js'
            }
        }
    },
    devServer: {
        proxy: {
            '/data5': {
                target: 'http://www.bjlink32.com/data5.php?cateID=10001',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                '^/data5': ''
                }
            },
            '/data6': {
                target: 'http://www.bjlink32.com/data6.php?cateID=10002',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                '^/data6': ''
                }              
            },
            '/data7': {
                target: 'http://www.bjlink32.com/data7.php?cateID=10001&id='+new Date().getTime(),
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                '^/data7': ''
                }       
            }
        }
    }
}