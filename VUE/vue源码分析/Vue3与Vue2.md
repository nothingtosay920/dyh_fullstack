


Vue3相对Vue2就是做了一些优化 主要是 源码优化、性能优化、编译优化、语法API优化

# 源码优化
1. vue3采用了ts开发 ts提供了更好的类型检查 能支持复杂的类型推导 
2. 主要是在代码管理上 vue3用了新的维护方式 根据功能将不同模块拆分到packages目录下

# 性能优化
1. 源码体积优化 引入了tree-shaking 减少了打包体积
2. 数据劫持优化 用了es6API proxy来替代Object.defineproperty

# 编译优化
vue3通过编译阶段对静态模板的分析 生成了Block tree。

# 语法优化
1. Options API 包含一个描述组件选项（data、methods、props等）的对象 options；
API开发复杂组件，同一个功能逻辑的代码被拆分到不同选项 ；
使用mixin重用公用代码，也有问题：命名冲突，数据来源不清晰；
2. Composition API
vue3 新增的一组 api，它是基于函数的 api，可以更灵活的组织组件的逻辑。
解决options api在大型项目中，options api不好拆分和重用的问题。