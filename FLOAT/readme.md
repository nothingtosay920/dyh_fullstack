# 浮动 
 使文本脱离文档流

# 清除浮动
 1. 在最后一个浮动元素后面增加一个冗余元素,给他设置clear: both;<!-- low -->
 2. 给父元素增加伪类
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
 3. BFC 
    看文章

# margin 重叠
1. BFC