# weui 来自于微信的界面灵魂
- 把css玩到极致是什么样的能力增长点
  前端界面工程师(UI)  WEUI 框架
  1. 不在于属性和选择器
  2. 面向对象的思想   封装  继承  多态
  封装
  .btn  基类
  .btn.loading
  {
    line-height: 44px
  }
  {
    bgi:loading.gif
  }
- 目的 二周内能搞定界面开发
  借鉴一下WEUI


- 写文章
  WEUI 源码分析文章  button来也
  MDN 官方解释  tap-height-color 手记
  Block
    .weui-btn
    .weui-loading
  Modifier
    .weui-btn_loading
    .weui-btn_disable
    .weui-btn_primary

    block + modifier + 组装的层次 = 
    网页世界 乐高
- 作业, 打卡
  1. 阅读-webkit-tap-height-color MDN 官方文档,并写个小结。

- -webkit-tap-height-color
  1. -webkit-tap-height-color是一个没有被标准化的属性，点击链接时会出现高亮颜色。显示给用户的高光是他们成功点击的标识，以及暗示了他们点击的元素。
  2. 初始值是black 适用所有元素 且不能被继承
  3. 参数是一个color value 包括：<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>

- BEM命名规范补充
  1. Block 封装一个独立的有意义的独立实体即组件，模块 
  2. element属于块的某部分，element名称不具备独立的意义，且名字唯一。通常用双下划线 __ 来表示，BEM也规定了element名称可以包含拉丁字母，数字，破折号和下划线。 
  3. Modifier 是添加到块/元素DOM节点的额外类名，并且应该保存原始的类名。通常用 -- 作为块和修饰器 或 元素和修饰器 的间隔，BEM也规定了可以使用拉丁字母，数字，破折号和下划线。
  4. 通常以中划线 - 来作为 块|元素|修饰器 名称中多个单词的间隔  
  例如: m-block__element--modifier
        weui-btn__cell-default

