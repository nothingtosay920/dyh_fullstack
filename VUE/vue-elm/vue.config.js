module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'httP://ustbhuangyi.com/sell/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}