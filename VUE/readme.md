# vue生命周期
- 首先 new vue
- 初始化 methods 和 Lifecycle 
  beforeCreate 执行
- 初始化data(数据源)
  created 执行
- 有没有挂载
  需要挂载 el
  已挂载 
- 是否有模板(template) 注: 装了vue语法的 即为模板
  模板拿去编译
  =>漏了
  beforeMount 执行
- 把虚拟dom结构变为真实dom结构 => 漏了 注: 已有dom结构
  mounted 执行
  判断 data数据源是否数据变化 
    有 beforeUpdate 和 updated执行
- 刚要销毁(html失效) beforeDestroy执行
- 销毁之后 destroyed 执行
activated 