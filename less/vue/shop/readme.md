# 全栈目录结构
    - 前台 VUE  
        - 用户端
        - 管理后台
    - API后端 服务器端 node + java
    
vue create --frontend 前端
8080
express --backend 后端 3000
mongodb 27017

前端 生命周期 mounted
axios 发送请求
-> API  向后端进行通信
http://localhost:8080 -> :3000 跨域

- 后端接口先调通
    localhost: 3000/users/:shunwuyu
    {
        name: 'sunwuyu',
        sex: '男'
    }
    ^/api/v1/users/:shunwuyu
    1. url 响应 /api/
    添加一个路由 /api/v1/xxx
    app.use(启用路由)
    2. 返回json
    3. postman 模拟请求
    4. 前端请求
    5. 不只是域名 端口协议不一样都算跨域
    6. App.all 后端配置解决的

- 基于mongodb 数据流-> MVC node(express)
->vue 界面
    1. model 层的构建
        这是一个精简版的model层 model 目录有了
        index.js 所有的模型定义在这里
        mongoose.Schema 根据数据库结构定义
        生成类
    2. postman 测试一下数据
        - 路由